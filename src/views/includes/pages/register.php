<?php

$usersLogin = [];

foreach ($users as $_user)
    array_push($usersLogin, $_user->name);

// Form sent
if (!empty($_POST))
{
    // Retrieve form data
    $name         = trim($_POST["name"]);
    $password     = $_POST["password"]     != '' ? md5($_POST["password"])     : '';
    $confirmation = $_POST["confirmation"] != '' ? md5($_POST["confirmation"]) : '';

    // Test name
    if (empty($name))
        $errorMessages["name"] = 'Missing name';

    // Test password
    if (empty($password))
        $errorMessages["password"] = 'Missing password';

    // Test confirmation
    if (empty($confirmation))
        $errorMessages["confirmation"] = 'Missing confirmation of password';
    else if ($password != $confirmation)
        $errorMessages["confirmation"] = 'Password does not match with confirmation';

    // Text existence
    if (in_array($name, $usersLogin))
        $errorMessages["name"] = 'Name already exists';

    // Success
    if (empty($errorMessages))
    {
        $prepare = $pdo->prepare('
            INSERT INTO
                users (name, password)
            VALUES
                (:name, :password)
        ');
        $prepare->bindValue('name', $name);
        $prepare->bindValue('password', $password);
        $prepare->execute();

        $successMessages[] = 'User registered';
        $_SESSION["name"]  = $name;
        header('Location: ./app');
    }
}
else
{
    // Initialize
    $_POST["name"]         = '';
    $_POST["password"]     = '';
    $_POST["confirmation"] = '';
}