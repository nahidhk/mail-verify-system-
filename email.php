<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userEmail = $_POST["email"];

    // Send confirmation email
    $to = $userEmail; // Send the confirmation email to the user
    $subject = "verify Your Email !";
    $message = "
 
Please  verify your mail verify link : 

https://www.mailr.bmhm.sbs/v?v=ip9ipdatadataneonr=djdirj7HiefUeo0enIKsjdldj


Powered By ® Nahid HK
";
    $headers = "From: verify@nahidhk.info";

    mail($to, $subject, $message, $headers);

    // Save user's email and message in email.json
    $data = json_decode(file_get_contents("email.json"), true);
    $data[] = array("email" => $userEmail, "message" => $message);
    file_put_contents("email.json", json_encode($data, JSON_PRETTY_PRINT));

    // Respond to the client-side
    echo "Confirmation email sent to $userEmail!";
}
?>
<script>
  window.location.href="v.html"
</script>