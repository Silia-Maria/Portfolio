<?php
// Old 
// $hostname = "127.0.0.1";
// $username = "root";
// $password = "";
// $dbname = "BE17_CR4_Silia_BigLibrary";

// try {
//     $connect = mysqli_connect($hostname, $username, $password, $dbname);
//     // echo "connected";
// } catch (Exception $e) {
//     echo "error" . mysqli_connect_error();
// }

// function var_dump_pretty($var)
// {
//     echo "<pre>";
//     var_dump($var);
//     echo "</pre";
// }


// Try with deployment 
$hostname = "173.212.235.205";
$username = "siliacodefactory_library";
$password = "everyb0dycanc0de";
$dbname = "siliacodefactory_library";

try {
    $connect = mysqli_connect($hostname, $username, $password, $dbname);
    // echo "connected";
} catch (Exception $e) {
    echo "error" . mysqli_connect_error();
}

function var_dump_pretty($var)
{
    echo "<pre>";
    var_dump($var);
    echo "</pre";
}