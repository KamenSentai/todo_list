<?php

$range      = 'day';
$formatDate = 'd-m-Y';

if (empty($_GET["day"]))
{
    $date_main = $today["weekday"];
    $extra     = mb_substr($today["month"], 0, 3).' '.$today["mday"].', '.$today["year"];
}
else
{
    $date_main = date('l', strtotime($_GET["day"]));
    $extra     = mb_substr(date('F', strtotime($_GET["day"])), 0, 3).' '.date('d', strtotime($_GET["day"])).', '.date('Y', strtotime($_GET["day"]));
}

// Get displayed date in URL
$todaymday     = $today["mday"] > 9   ? $today["mday"] : '0'.$today["mday"];
$todaymon      = $today["mon"] > 9    ? $today["mon"]  : '0'.$today["mon"];
$displayedDate = !empty($_GET["day"]) ? $_GET["day"]   : $todaymday.'-'.$todaymon.'-'.$today["year"];

?>
<div class="content day active">
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