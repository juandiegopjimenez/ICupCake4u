<?php
  if(isset($_POST['enviar'])) {
    $nombre = $_POST['name'];
    $celular = $_POST['phone'];
    $mensaje = $_POST['msg'];
    $email = $_POST['email'];

    $destinatario = "juandpjimenez@gmail.com";
    $asunto = "Contacto desde ICupCake4u";

    $carta = "De: $nombre \n";
    $carta .= "Correo: $email \n";
    $carta .= "Telefono: $celular \n";
    $carta .= "Mensaje: $mensaje";

    mail($destinatario, $asunto, $carta);
    header("Location:../html/mensaje-enviado.html");
  }
?>
