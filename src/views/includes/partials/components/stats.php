<?php

$number_missed = 0;
$number_done   = 0;
$number_total  = 0;

foreach ($user_tasks as $_task)
{
    if ($_task->status == 'to do' && $_task->expiry_date < strtotime('today midnight'))
        $number_missed++;
    if ($_task->status == 'done')
        $number_done++;
    $number_total++;
}

?>
<!-- Stats -->
<div class="stats">
    <span class="stat missed">
        <i class="fas fa-exclamation-triangle"></i>
        <span class="data"><?= $number_missed; ?></span>
    </span>
    <span class="stat done">
        <i class="fas fa-check-square"></i>
        <span class="data"><?= $number_done; ?></span>
        </span>
    <span class="stat total">
        <i class="fas fa-list-alt"></i>
        <span class="data"><?= $number_total; ?></span>
    </span>
</div>