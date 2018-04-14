<?php

$usersLogin = [];

foreach ($users as $_user)
    array_push($usersLogin, [$_user->name, $_user->password]);

// Form sent
if (!empty($_POST))
{
    // Retrieve form data
    $name     = trim($_POST["name"]);
    $password = $_POST["password"] != '' ? md5($_POST['password']) : '';

    // Test name
    if (empty($name))
        $errorMessages["name"] = 'Missing name';

    // Test password
    if (empty($password))
        $errorMessages["password"] = 'Missing password';

    // Test match
    if (empty($errorMessages) && !in_array([$name, $password], $usersLogin))
        $errorMessages["name"] = 'Name or password error';

    // Succes
    if (empty($errorMessages))
    {
        $successMessages[] = 'User logged in';
        $_SESSION["name"]  = $name;
        header('Location: ./app');
    }
}
else
{
    // Initialize
    $_POST["name"]     = '';
    $_POST["password"] = '';
}