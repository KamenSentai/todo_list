<?php

// Get user data
$query  = $pdo->query('SELECT * FROM users WHERE users.name = "'.$_SESSION["name"].'"');
$user   = $query->fetch();
$userID = $user->id;

// Get tasks
$query_t = $pdo->query('SELECT * FROM tasks');
$tasks   = $query_t->fetchAll();

// Get user's tasks
$user_tasks = [];
foreach ($tasks as $_task)
{
    if ($_task->user == $userID)
        array_push($user_tasks, $_task);
}

// Create messages arays
$errorMessages   = [];
$successMessages = [];

// URL values
$url_get_d = !empty($_GET["day"])   ? '&day='.   $_GET["day"]   : '';
$url_get_w = !empty($_GET["week"])  ? '&week='.  $_GET["week"]  : '';
$url_get_m = !empty($_GET["month"]) ? '&month='. $_GET["month"] : '';
$url_get_y = !empty($_GET["year"])  ? '&year='.  $_GET["year"]  : '';
$urls_get  = $url_get_d.$url_get_w.$url_get_m.$url_get_y;

// Current date
$today = getdate();

// Task added
if (!empty($_POST))
{
    // Retrieve form data
    $task     = trim($_POST["task"]);
    $priority = $_POST["priority"];
    $day      = $_POST["day"];
    $month    = $_POST["month"];
    $year     = $_POST["year"];

    // Test name
    if (empty($task))
        $errorMessages["task"] = 'Missing task';

    // Succes
    if (empty($errorMessages))
    {
        $status      = 'to do';
        $expiry_date = strtotime($day.'-'.$month.'-'.$year);

        $prepare = $pdo->prepare('
            INSERT INTO
                tasks (user, task, status, priority, expiry_date)
            VALUES
                (:user, :task, :status, :priority, :expiry_date)
        ');
        $prepare->bindValue('user',        $userID);
        $prepare->bindValue('task',        $task);
        $prepare->bindValue('status',      $status);
        $prepare->bindValue('priority',    $priority);
        $prepare->bindValue('expiry_date', $expiry_date);
        $prepare->execute();

        $range     = !empty($_GET["range"]) ? $_GET["range"] : '';
        $url_get_d = !empty($_GET["day"])   ? '&day='.   $_GET["day"]   : '';
        $url_get_w = !empty($_GET["week"])  ? '&week='.  $_GET["week"]  : '';
        $url_get_m = !empty($_GET["month"]) ? '&month='. $_GET["month"] : '';
        $url_get_y = !empty($_GET["year"])  ? '&year='.  $_GET["year"]  : '';

        $successMessages[] = 'Task added';
        header('Location: ./app'.$url_get_d.$url_get_w.$url_get_m.$url_get_y.'#'.$range);
    }
}
else
{
    // Initialize
    $_POST["task"]     = '';
    $_POST["priority"] = '';
    $_POST["day"]      = '';
    $_POST["month"]    = '';
    $_POST["year"]     = '';
}