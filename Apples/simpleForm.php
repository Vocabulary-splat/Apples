<!DOCTYPE html>

<html>
  <head>
    <meta charset="UTF-8" />

    <title>Contact</title>
  </head>

  <body>
    <script>
      const $_GET = location.search
        .replace("?", "")
        .split("&")
        .map((keyValuePair) =>
          keyValuePair.split("=").reduce((key, value) => ({ [key]: value }))
        )
        .reduce((acc, prop) => ({ ...acc, ...prop }));

      $fullName = $_GET["fullName"];

      $email = $_GET["email"];

      $phone = $_GET["phone"];

      $comment = $_GET["comment"];

      $subject = "I210 Contact Form";

      //Enter your email address

      $to = "cruzmas@iu.edu";

      //Prepare Email Body Text

      $Body = "";

      $Body += "Name: ";

      $Body += $fullName;

      $Body += "\n";

      $Body += "Phone Number: ";

      $Body += $phone;

      $Body += "\n";

      $Body += "Email: ";

      $Body += $email;

      $Body += "\n";

      $Body += "Comments: ";

      $Body += $comment;

      $Body += "\n";

      //Send Email

      if ($fullName && $email) {
        window.open(
          `mailto:${$to}?subject=${$subject}&body=${$Body}`,
          "_blank"
        );
        location.href = "thanks.html";
      } else {
        location.href = "contact.html";
      }
    </script>
  </body>
</html>
