<?php
	$nombre = $_POST['name'];
	$mail = $_POST['mail'];
	$asunto = 'Formulario Web - ecoapo.com.ar';
	$mensaje = "Nombre: ".$nombre."\nMail: $mail\nMensaje:".$_POST['message'];
    $to = "info@ecoapo.com.ar";

    $cabeceras = 'From: FormularioWeb@ecoapo.com.ar' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();
    
    if( mail($to, $asunto, $mensaje, $cabeceras) ) {
        echo json_encode(array(
           'success'=> true,
           'message' => 'Message sent successfully'
        ));
     }else {
        echo json_encode(array(
           'error'=> true,
           'message' => 'Error sending message'
        ));
     }
?>