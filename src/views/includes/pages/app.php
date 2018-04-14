<!-- Header -->
<header>
    <ul class="menu_header">
        <li>
            <!-- Title -->
            <a class="title title_app" href="./app" title="<?= $title; ?>"><h1><?= $title; ?></h1></a>
        </li>
        <li>
            <!-- Sign out -->
            <a class="button_signout" href="./logout" title="Log out">&#10005;</a>
        </li>
    </ul>
</header>
<!-- App -->
<div class="app">
    <!-- Navigation -->
    <ul class="menu">
        <li class="slide_bar"></li>
        <li class="nav_bar"></li>
        <li><a class="day active" href="#day" title="Day">Day</a></li>
        <li><a class="week" href="#week" title="Week">Week</a></li>
        <li><a class="month" href="#month" title="Month">Month</a></li>
        <li><a class="year" href="#year" title="Year">Year</a></li>
    </ul>

    <div class="ranges">
        <?php

        include 'views/includes/partials/day.php';
        include 'views/includes/partials/week.php';
        include 'views/includes/partials/month.php';
        include 'views/includes/partials/year.php';

        ?>
    </div>
</div>