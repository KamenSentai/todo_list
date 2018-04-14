<?php

$range      = 'year';
$extra      = '';
$formatDate = 'Y';

if (empty($_GET["year"]))
    $date_main = $today["year"];
else
    $date_main = $_GET["year"];

// Get displayed date in URL
$displayedDate = !empty($_GET["year"]) ? $_GET["year"] : $today["year"];

?>
<div class="content year">
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