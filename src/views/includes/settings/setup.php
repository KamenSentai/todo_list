<?php

// Start session
session_start();

// Title
$title = 'Đừng quên !';

// Get page
$page = !empty($_GET["page"]) ? $_GET["page"] : 'home';

// Log out
if ($page == 'logout')
{
    $_SESSION['name'] = '';
    header('Location: ./');
}
// Forbid entrance if no log in
else if ($page == 'app' && empty($_SESSION["name"]))
    header('Location: ./');
// Stay if no log out
else if ($page != 'app' && !empty($_SESSION["name"]))
{
    // Tasks interactions
    if
    (
        ($page == 'validate' || $page == 'invalidate' || $page == 'prioritize' || $page == 'edit' || $page == 'delete')
        && !empty($_GET["check"])
    )
    {
        $query_t   = $pdo->query('SELECT * FROM tasks');
        $tasks     = $query_t->fetchAll();
        $range     = !empty($_GET["range"]) ? $_GET["range"] : '';
        $url_get_d = !empty($_GET["day"])   ? '&day='.   $_GET["day"]   : '';
        $url_get_w = !empty($_GET["week"])  ? '&week='.  $_GET["week"]  : '';
        $url_get_m = !empty($_GET["month"]) ? '&month='. $_GET["month"] : '';
        $url_get_y = !empty($_GET["year"])  ? '&year='.  $_GET["year"]  : '';

        // Validate or invalidate
        if ($page == 'validate' || $page == 'invalidate')
            $prepare = $pdo->prepare('
                UPDATE
                    tasks
                SET
                    status = "'.($page == 'validate' ? 'done' : 'to do').'"
                WHERE
                    id = '.$_GET["check"]
            );
        // Prioritize
        else if ($page == 'prioritize' && !empty($_GET["radio"]))
            $prepare = $pdo->prepare('
                UPDATE
                    tasks
                SET
                    priority = "'.$_GET["radio"].'"
                WHERE
                    id = '.$_GET["check"]
            );
        // Edit
        else if ($page == 'edit')
            $prepare = $pdo->prepare('
                UPDATE
                    tasks
                SET
                    task        = "'.$_POST["task"].'",
                    expiry_date = '.strtotime($_POST["day"].'-'.$_POST["month"].'-'.$_POST["year"]).'
                WHERE
                    id = '.$_GET["check"]
            );
        // Delete
        else if ($page == 'delete')
            $prepare = $pdo->prepare('
                DELETE FROM
                    tasks
                WHERE
                    id = '.$_GET["check"]
            );

        // Execute
        if (!empty($prepare))
            $prepare->execute();

        // Redirect
        header('Location: ./app'.$url_get_d.$url_get_w.$url_get_m.$url_get_y.'#'.$range);
    }
    else
        header('Location: ./app');
}

// Define options
$options =
[
    "register" => "Register",
    "log"      => "Log in",
];

// Set up options
if (array_key_exists($page, $options))
{
    // Create messages arays
    $errorMessages   = [];
    $successMessages = [];

    // Get users
    $query_u = $pdo->query('SELECT * FROM users');
    $users   = $query_u->fetchAll();

    require_once 'views/includes/pages/'.$_GET["page"].'.php';
}
// Add task
else if ($page == 'app')
    require 'views/includes/settings/task.php';