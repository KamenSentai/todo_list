<?php

$range      = 'month';
$formatDate = 'm-Y';

if (empty($_GET["month"]))
{
    $date_main = $today["month"];
    $extra     = $today["year"];
}
else
{
    $date_main = date('F', mktime(0, 0, 0, explode('-', $_GET["month"])[0], 10));
    $extra     = explode('-', $_GET["month"])[1];
}

// Get displayed date in URL
$todaymon      = $today["mon"] > 9      ? $today["mon"]  : '0'.$today["mon"];
$displayedDate = !empty($_GET["month"]) ? $_GET["month"] : $todaymon.'-'.$today["year"];

?>
<div class="content month">
    <?php

    require 'views/includes/partials/components/stats.php';
    require 'views/includes/partials/components/slider.php';

    ?>
    <div class="main">
        <?php

        require 'views/includes/partials/components/adding.php';
        require 'views/includes/partials/components/list.php';

        ?>
    </div>
</div>