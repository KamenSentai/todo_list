<?php

// Create arrays
$temporyArray   = [];
$temporyTime    = [];
$displayedTasks = [];

// Keep shown tasks
foreach ($user_tasks as $_task) 
{
    if (date($formatDate, $_task->expiry_date) == $displayedDate)
    {
        array_push($temporyArray, $_task);
        array_push($temporyTime,  $_task->expiry_date);
    }
}

// Order by date
while (!empty($temporyArray))
{
    $key_min = array_search(min($temporyTime), $temporyTime);
    array_push($displayedTasks, $temporyArray[$key_min]);
    unset($temporyArray[$key_min]);
    unset($temporyTime[$key_min]);
}

?>
<!-- Tasks -->
<table class="tasks">
    <tbody>
        <!-- Task -->
        <?php foreach ($displayedTasks as $_displayedTask): ?>
            <tr>
                <?php if (!empty($_GET["edit"]) && $_displayedTask->id == $_GET["edit"]): ?>
                    <td colspan="5">
                        <form action="./edit:<?= $_displayedTask->id.'::'.$range.'::::'.$urls_get; ?>" method="post" class="edit_task">
                            <input
                                id="task"
                                type="text"
                                name="task"
                                placeholder="Task"
                                value="<?= $_displayedTask->task; ?>"
                            >
                            <input
                                id="day"
                                type="number"
                                name="day"
                                placeholder="DD"
                                min="1" max="31"
                                value="<?= date('d', $_displayedTask->expiry_date); ?>"
                            >
                            <input
                                id="month"
                                type="number"
                                name="month"
                                placeholder="MM"
                                min="1"
                                max="12"
                                value="<?= date('m', $_displayedTask->expiry_date); ?>"
                            >
                            <input
                                id="year"
                                type="number"
                                name="year"
                                placeholder="AAAA"
                                min="<?= $today["year"]; ?>"
                                max="<?= $today["year"] + 100; ?>"
                                value="<?= date('Y', $_displayedTask->expiry_date); ?>"
                            >
                            <button type="submit" value="Edit"><i class="far fa-save"></i></button>
                            <a class="cancel" href="./app<?= $urls_get.'#'.$range; ?>"><i class="fas fa-times"></i></a>
                        </form>
                    </td>
                <?php else: ?>
                    <!-- Validation button -->
                    <td class="v">
                        <?php $validation = $_displayedTask->status == 'to do' ? 'validate' : 'invalidate'; ?>
                        <a href="./<?= $validation; ?>:<?= $_displayedTask->id.'::'.$range.'::::'.$urls_get; ?>" class="<?= $validation; ?>" title="<?= ucfirst($validation); ?>">
                            <?php if ($_displayedTask->status == 'done'): ?>
                                <i class="fas fa-check"></i>
                            <?php elseif ($_displayedTask->status == 'to do' && $_displayedTask->expiry_date < strtotime('today midnight')): ?>
                                <i class="fas fa-exclamation"></i>
                            <?php endif; ?>
                        </a>
                    </td>
                    <!-- Task text -->
                    <td class="t">
                        <span class="task_text <?= ($_displayedTask->status == 'to do' && $_displayedTask->expiry_date < strtotime('today midnight')) ? 'missed' : ''; ?>"><?= $_displayedTask->task; ?></span>
                        <span class="expiry_date"><?= date('d-m-Y', $_displayedTask->expiry_date); ?></span>
                    </td>
                    <td class="p">
                        <?php if ($_displayedTask->status == 'to do'): ?>
                            <a href="./prioritize:<?= $_displayedTask->id.'::'.$range.':::low::::'.   $urls_get; ?>" class="prioritize low    <?= $_displayedTask->priority == 'low'    ? 'checked' : ''; ?>" title="Low"></a>
                            <a href="./prioritize:<?= $_displayedTask->id.'::'.$range.':::medium::::'.$urls_get; ?>" class="prioritize medium <?= $_displayedTask->priority == 'medium' ? 'checked' : ''; ?>" title="Medium"></a>
                            <a href="./prioritize:<?= $_displayedTask->id.'::'.$range.':::high::::'.  $urls_get; ?>" class="prioritize high   <?= $_displayedTask->priority == 'high'   ? 'checked' : ''; ?>" title="High"></a>
                        <?php endif; ?>
                    </td>
                    <!-- Edit button -->
                    <td class="e">
                        <?php if ($_displayedTask->status == 'to do'): ?>
                            <a href="./app<?= $urls_get.'&edit='.$_displayedTask->id; ?>#<?= $range; ?>" class="edit" title="Edit">
                                <i class="far fa-edit"></i>
                            </a>
                        <?php endif; ?>
                    </td>
                    <!-- Delete button -->
                    <td class="d">
                        <a href="./delete:<?= $_displayedTask->id.'::'.$range.'::::'.$urls_get; ?>" class="delete" title="Delete">
                            <i class="far fa-trash-alt"></i>
                        </a>
                    </td>
                <?php endif; ?>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>