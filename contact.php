<?php
// contact.php - store each contact in a separate folder by name

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $name = preg_replace("/[^a-zA-Z0-9_-]/", "", trim($_POST['name'])); // only letters, numbers, _ and -
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    $time = date("Y-m-d H:i:s");

    // Create a directory for the user if it doesn't exist
    $dir = "contacts/" . $name;
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true); // recursive mkdir
    }

    // Store message in a file inside the directory
    $filename = $dir . "/message_" . time() . ".txt";
    $content = "Time: $time\nName: $name\nEmail: $email\nMessage: $message\n";

    file_put_contents($filename, $content);

    $success = "Thank you! Your message has been saved.";
}
?>
