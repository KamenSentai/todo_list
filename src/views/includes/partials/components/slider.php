<?php

if ($range =='day')
{
    // Calculate previous and next day
    $value_p = date('d-m-Y', strtotime($displayedDate.'-1 day'));
    $value_n = date('d-m-Y', strtotime($displayedDate.'+1 day'));

    // Define URL strings
    $arrow_p = '&day='.$value_p.$url_get_w.$url_get_m.$url_get_y.'#'.$range;;
    $arrow_n = '&day='.$value_n.$url_get_w.$url_get_m.$url_get_y.'#'.$range;;
}
else if ($range =='week')
{
    // Split to get week and year
    $split_w = explode('-', $displayedDate)[0];
    $split_y = explode('-', $displayedDate)[1];

    // Calculate previous and next week
    $p_w = (($split_w - 1) + 52 - 1) % 52 + 1;
    $n_w = (($split_w - 1) + 1) % 52 + 1;

    // Add 0 if necessary
    $p_w_string = $p_w < 10 ? '0'. $p_w : $p_w;
    $n_w_string = $n_w < 10 ? '0'. $n_w : $n_w;

    // Calculate previous and next year
    $p_y_string = $p_w != 52 ? $split_y : $split_y - 1;
    $n_y_string = $n_w != 1  ? $split_y : $split_y + 1;

    // Concate string
    $value_p = $p_w_string.'-'.$p_y_string;
    $value_n = $n_w_string.'-'.$n_y_string;

    // Define URL strings
    $arrow_p = $url_get_d.'&week='.$value_p.$url_get_m.$url_get_y.'#'.$range;;
    $arrow_n = $url_get_d.'&week='.$value_n.$url_get_m.$url_get_y.'#'.$range;;
}
else if ($range =='month')
{
    // Split to get month and year
    $split_m = explode('-', $displayedDate)[0];
    $split_y = explode('-', $displayedDate)[1];

    // Calculate previous and next month
    $p_m = (($split_m - 1) + 12 - 1) % 12 + 1;
    $n_m = (($split_m - 1) + 1) % 12 + 1;

    // Add 0 if necessary
    $p_m_string = $p_m < 10 ? '0'. $p_m : $p_m;
    $n_m_string = $n_m < 10 ? '0'. $n_m : $n_m;

    // Calculate previous and next year
    $p_y_string = $p_m != 12 ? $split_y : $split_y - 1;
    $n_y_string = $n_m != 1  ? $split_y : $split_y + 1;

    // Concate string
    $value_p = $p_m_string.'-'.$p_y_string;
    $value_n = $n_m_string.'-'.$n_y_string;

    // Define URL strings
    $arrow_p = $url_get_d.$url_get_w.'&month='.$value_p.$url_get_y.'#'.$range;;
    $arrow_n = $url_get_d.$url_get_w.'&month='.$value_n.$url_get_y.'#'.$range;;
}
else if ($range =='year')
{
    // Calculate previous and next year
    $value_p = $displayedDate - 1;
    $value_n = $displayedDate + 1;

    // Define URL strings
    $arrow_p = $url_get_d.$url_get_w.$url_get_m.'&year='.$value_p.'#'.$range;;
    $arrow_n = $url_get_d.$url_get_w.$url_get_m.'&year='.$value_n.'#'.$range;;
}

?>
<!-- Slider -->
<div class="slider">
    <div class="arrow left"><a href="./app<?= $arrow_p; ?>" title="Previous <?= $range; ?>">&#10094;</a></div>
    <div class="date">
        <span class="date_main"><?= $date_main; ?></span>
        <?php if (!empty($extra)):?>
            <span class="complete"><?= $extra; ?></span>
        <?php endif; ?>
    </div>
    <div class="arrow right"><a href="./app<?= $arrow_n; ?>" title="Next <?= $range; ?>">&#10095;</a></div>
</div>