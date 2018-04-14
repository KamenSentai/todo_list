<?php

$range      = 'week';
$formatDate = 'W-Y';

if (empty($_GET["week"]))
{
    $date_main = date('W', strtotime(date('d-m-Y', $today["0"]))).'<span class="smaller">'.(date('W', strtotime(date('d-m-Y', $today["0"]))) % 10 != 1 ? 'th' : 'st').'</span> week';
    $extra     = 'of '.$today["year"];
}
else
{
    $date_main = explode('-', $_GET["week"])[0].'<span class="smaller">'.(explode('-', $_GET["week"])[0] % 10 != 1 ? 'th' : 'st').'</span> week';
    $extra     = 'of '.explode('-', $_GET["week"])[1];
}

// Get displayed date in URL
$displayedDate = !empty($_GET["week"]) ? $_GET["week"] : date('W-Y', strtotime(date('d-m-Y', $today["0"])));

?>
<div class="content week">
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