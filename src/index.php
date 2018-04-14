<?php

include 'views/includes/settings/errors.php';
require_once 'views/includes/settings/config.php';
require_once 'views/includes/settings/setup.php';

?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title><?= $title.(array_key_exists($page, $options) ? ' | '.$options[$_GET["page"]] : ''); ?></title>
        <!-- Icons -->
        <link rel="apple-touch-icon" sizes="180x180" href="assets/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="assets/favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="assets/favicons/favicon-16x16.png">
        <link rel="manifest" href="assets/favicons/site.webmanifest">
        <link rel="mask-icon" href="assets/favicons/safari-pinned-tab.svg" color="#AA0000">
        <meta name="msapplication-TileColor" content="#AA0000">
        <meta name="theme-color" content="#AA0000">
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700">
        <!-- CSS -->
        <link rel="stylesheet" href="styles/reset.css">
        <link rel="stylesheet" href="styles/fontawesome.css">
        <link rel="stylesheet" href="styles/main.css">
        <!-- JS -->
        <script src="scripts/modernizr.js"></script>
    </head>

    <body>
        <!-- Card -->
        <div class="container_card page_<?= $page;?>">
            <?php if ($page != 'app'): ?>
                <a class="title title_<?= $page;?>" href="./<?= !empty($_SESSION["name"]) ? 'app' : ''; ?>" title="<?= $title; ?>">
                    <h1><?= $title; ?></h1>
                </a>
            <?php endif;

            if ($page == 'home')
                require_once 'views/includes/pages/options.php';
            else if (array_key_exists($page, $options))
                require_once 'views/includes/partials/components/form.php';
            else if ($page == 'app')
                require_once 'views/includes/pages/app.php';
            ?>
        </div>

        <!-- Popup -->
        <?php

        if ($page == 'app')
            require_once 'views/includes/partials/components/popup.php';

        ?>

        <!-- JS -->
        <script src="scripts/main.js"></script>
    </body>

</html>