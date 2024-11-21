<script setup>

</script>

<template>
    <div class="body">
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active position-relative">
                    <img src="@/assets/img-home.jpg" class="d-block w-100 imagen" alt="...">
                    <div class="carousel-caption d-flex flex-column align-items-center">
                        <h1 class="display-bold text-white text-center">Empieza a cotizar con nosotros</h1>
                        <router-link to="/form" class="btn btn-light">Comenzar</router-link>
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
                            <router-link to="/form" class="btn btn-success">Cotizar</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-sm-12 col-md-4 mb-4">
                    <div class="card shadow-sm border-0">
                        <img src="@/assets/Estafeta.svg" class="card-img-top" alt="Estafeta">
                        <div class="card-body text-center">
                            <p class="card-title">Estafeta</p>
                            <p class="card-text">Tu próximo envío... ¡Estafétalo!.</p>
                            <router-link to="/form" class="btn btn-success">Cotizar</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-sm-12 col-md-4 mb-4">
                    <div class="card shadow-sm border-0">
                        <img src="@/assets/Fedex.png" class="card-img-top" alt="Fedex">
                        <div class="card-body text-center">
                            <p class="card-title">Fedex</p>
                            <p class="card-text">El mundo a tiempo.</p>
                            <router-link to="/form" class="btn btn-success">Cotizar</router-link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
.body {
    background-color: #f5f5f5;
    ;
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