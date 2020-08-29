<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="Sorprende a tus seres queriodos o alegra a tu
  paladar con nuestros delicioso cupcakes de todos los sabores y como tu los quieras">
  <meta name="keywords" content="cupckes, postres, regalos, comida">
  <meta name="author" content="Juan Diego Peña Jiménez @juand_pjimenez">
  <link href="https://fonts.googleapis.com/css2?family=Sen&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+TC&display=swap" rel="stylesheet">
  <link rel="icon" href="../imagenes/icono.ico">
  <link rel="stylesheet" href="../estilos/normalize.css">
  <link rel="stylesheet" href="../estilos/estilos.css">
  <link rel="stylesheet" href="../estilos/contacto.css">
  <script src="https://kit.fontawesome.com/fccee00fe1.js" crossorigin="anonymous"></script>
  <title>ICupCake4u - contacto</title>
</head>
<body>
  <header>
    <a href="../index.html"><img loading="lazy" class="logo" src="../imagenes/logo.png" alt="Logo ICupCake4u"></a>
    <div class="header">
      <div class="header__icons">
        <i class="fas fa-search" id="icon-search"></i>
        <a href="../html/compra.html"><i class="fas fa-shopping-bag" id="shopping-bag"></i></a>
        <i id="icons__bars" class="fas fa-bars " onClick="cambiarClase()"></i>
      </div>
      <nav id="nav">
        <ul>
          <li><a href="../index.html"><i id="nav__home-icon" class="fas fa-home"></i>Inicio</a></li>
          <li><a href="../html/cupcakes.html"><img loading="lazy" id="nav__cupcake-icon" src="../imagenes/cupcake-icon.png" alt="cupcake">Cupcakes</a></li>
          <li><a href="../html/galletas.html"><i id="nav__cookie-icon" class="fas fa-cookie-bite"></i></i>Galletas</a></li>
          <li><a href="../html/popcakes.html"><img loading="lazy" id="nav__popcake-icon" src="../imagenes/popcake.png" alt="popcake">Popcakes</a></li>
          <li><a href="../html/sabores.html"><i id="nav__tongue-icon" class="fas fa-grin-tongue"></i>Linea de sabores</a></li>
          <li><a href="../html/orgullo.html"><i id="nav__orgullo-icon" class="fas fa-ribbon"></i>Orgullo</a></li>
          <li><a href="../html/../php/index.php"><i id="nav__people-icon" class="fas fa-user-friends"></i>Contactanos</span></a></li>
          <li><a href="../html/clientes.html"><i id="nav__smile-icon" class="far fa-smile-wink"></i>Clientes <span>satisfechos</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <div id="fondo"></div>
    <div id="ctn-bars-search">
      <input type="text" id="input-search" placeholder="¿Qué deseas buscar?">
    </div>
    <ul id="box-search">
      <li><a href="../html/cupcakes.html"><i class="fas fa-search"></i>Cupcakes</a></li>
      <li><a href="../html/popcakes.html"><i class="fas fa-search"></i>Popcakes</a></li>
      <li><a href="../html/galletas.html"><i class="fas fa-search"></i>galletas</a></li>
      <li><a href="../html/orgullo.html"><i class="fas fa-search"></i>Orgullo</a></li>
      <li><a href="../html/sabores.html"><i class="fas fa-search"></i>Sabores</a></li>
      <li><a href="../html/../php/index.php"><i class="fas fa-search"></i>Contactanos</a></li>
    </ul>
    <div id="cover-ctn-search"></div>
    <form method="post">
      <input type="text" placeholder="Nombre" name="name">
      <input type="email" placeholder="Email" name="email">
      <input type="text" placeholder="Asunto" name="asunto">
      <textarea placeholder="Mensaje" name="msg"></textarea>
      <input type="submit" name="enviar">
    </form>
  </main>
  <aside>
    <div class="contacto">
      <h4>Contactanos:</h4>
      <p>
        +57 314 223 9117 <br>
        +57 312 517 3449 <br>
        roses1986t@gmail.com
      </p>
    </div>
    <div class="redes">
      <h4>Siguenos en nuestras redes</h4>
      <a href="https://www.facebook.com/Lovecupcakes4U" target="_blank"><i class="fab fa-facebook-square"></i></a>
      <a href="https://www.instagram.com/kailu86/" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
  </aside>
  <footer>
    <div class="quick-lines">
      <h4>Atajos</h4>
      <ul>
        <li><a href="../html/menu.html">Menu</a></li>
        <li><a href="../html/../php/index.php">Contactanos</a></li>
        <li><a href="../html/sobre_nosotros.html">Sobre nosotros</a></li>
      </ul>
    </div>
  </footer>
  <script src="js/header.js"></script>
  <?php
    include("correo.php");
   ?>
</body>
</html>
