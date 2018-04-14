<!-- Background area -->
<div class="box_adding background"></div>
<!-- Opening bar -->
<div class="opening_adding">
    <span class="indicator"><i class="fas fa-bars"></i>Add a task...</span>
    <span class="cross">&#10005;</span>
</div>
<!-- Form -->
<div class="form">
    <?php $action = './app:::::'.$urls_get.'&range='.$range; ?>
    <!-- Add task -->
    <form action="<?= $action; ?>" method="post" class="add_task">
        <!-- Task text -->
        <input
            id="task"
            type="text"
            name="task"
            placeholder="Task"
            value="<?= $_POST["task"] = ''; ?>"
        >
        <div class="border">
            <span class="message"><?= !empty($errorMessages["name"]) ? $errorMessages["name"] : ''; ?></span>
        </div>
        <!-- Task priority -->
        <div class="row radio">
            <span class="section">Priority</span>
            <span class="option">
                <input  id="low_<?= $range; ?>" type="radio" name="priority" value="low" checked>
                <label for="low_<?= $range; ?>" class="checkmark"></label>
                <label for="low_<?= $range; ?>" class="text">Low</label>
            </span>
            <span class="option">
                <input  id="medium_<?= $range; ?>" type="radio" name="priority" value="medium">
                <label for="medium_<?= $range; ?>" class="checkmark"></label>
                <label for="medium_<?= $range; ?>" class="text">Medium</label>
            </span>
            <span class="option">
                <input  id="high_<?= $range; ?>" type="radio" name="priority" value="high">
                <label for="high_<?= $range; ?>" class="checkmark"></label>
                <label for="high_<?= $range; ?>" class="text">High</label>
            </span>
        </div>
        <!-- Task expiry -->
        <div class="row number">
            <p class="section">Expiry date (DD-MM-YYYY)</p>
            <div class="inputs">
                <input id="day"   type="number" name="day"   placeholder="DD"   min="1" max="31" value="<?= $today["mday"]; ?>">
                <input id="month" type="number" name="month" placeholder="MM"   min="1" max="12" value="<?= $today["mon"]; ?>">
                <input id="year"  type="number" name="year"  placeholder="AAAA" min="<?= $today["year"]; ?>" max="<?= $today["year"] + 100; ?>" value="<?= $today["year"]; ?>">
            </div>
        </div>
        <!-- Submit -->
        <input type="submit" value="Add task">
    </form>
</div>