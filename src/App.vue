<script setup>

</script>

<template>
  <div class="body">
    
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">PaqueteExpress</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contáctanos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cotizar</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active position-relative">
        <img src="@/assets/img-home.jpg" class="d-block w-100 imagen" alt="...">
        <div class="carousel-caption d-flex flex-column align-items-center">
          <h1 class="display-bold text-white text-center">Empieza a cotizar con nosotros</h1>
          <button type="button" class="btn btn-light mt-3">Comenzar</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <h2 class="text-center mb-4">Nuestros Servicios de Envío</h2>
    <div class="row">
      <div class="col-sm-12 col-md-4 mb-4">
        <div class="card shadow-sm border-0">
          <img src="@/assets/DHL.png" class="card-img-top" alt="DHL">
          <div class="card-body text-center">
            <p class="card-title">DHL</p>
            <p class="card-text">Excelencia. Entrega sencilla.</p>
            <button type="button" class="btn btn-success">Cotizar</button>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4 mb-4">
        <div class="card shadow-sm border-0">
          <img src="@/assets/Estafeta.svg" class="card-img-top" alt="Estafeta">
          <div class="card-body text-center">
            <p class="card-title">Estafeta</p>
            <p class="card-text">Tu próximo envío... ¡Estafétalo!.</p>
            <button type="button" class="btn btn-success">Cotizar</button>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4 mb-4">
        <div class="card shadow-sm border-0">
          <img src="@/assets/Fedex.png" class="card-img-top" alt="Fedex">
          <div class="card-body text-center">
            <p class="card-title">Fedex</p>
            <p class="card-text">El mundo a tiempo.</p>
            <button type="button" class="btn btn-success">Cotizar</button>
          </div>
        </div>
      </div>

    </div>
    
    <footer>
      <div class="container text-center mt-5">
        <p>&copy; 2024 PaqueteExpress. Todos los derechos reservados.</p>
      </div>
    </footer>

  </div>
  </div>

</template>

<style scoped>

.body{
  background-color: #f5f5f5;;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}

.navbar-brand {
  font-size: 1.5rem;
}

.imagen {
  height: 35rem;
  object-fit: cover;
}

.carousel-caption {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 6px 6px 12px #000000b3;
}

.card {
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  height: 8rem;
  object-fit: contain;
}
.card-title {
  font-weight: 700px;
  font-size: 1.5rem;
}
</style>
