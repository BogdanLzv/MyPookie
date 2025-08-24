<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = htmlspecialchars($_POST["username"]);
    $password = htmlspecialchars($_POST["password"]);
    $rememberMe = htmlspecialchars($_POST["rememberMe"]);
}