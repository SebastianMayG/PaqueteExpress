<script setup>

</script>

<template>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Opciones de Envío</h2>

        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0"
            aria-valuemax="100">
            <div class="progress-bar" style="width: 33%"></div>
        </div>

        <div class="mt-5">
            <div class="card mb-3 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">DHL Express</h5>
                    <p class="card-text">Servicio rápido de recolección y entrega en 24-48 horas.</p>
                    <router-link to="/Details" class="btn btn-success w-40 mb-3">Tarifa: $250 MXN</router-link>
                </div>
            </div>
            <div class="card mb-3 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">FedEx Priority</h5>
                    <p class="card-text">Entrega en un día con seguimiento completo.</p>
                    <router-link to="/Details" class="btn btn-success w-40 mb-3">Tarifa: $280 MXN</router-link>
                </div>
            </div>
            <div class="card mb-3 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">Estafeta Estándar</h5>
                    <p class="card-text">Servicio económico con entrega en 3-5 días hábiles.</p>
                    <router-link to="/Details" class="btn btn-success w-40 mb-3">Tarifa: $150 MXN</router-link>
                </div>
            </div>
        </div>

        <router-link to="/form" type="submit" class="btn btn-warning w-100 mb-3">Regresar</router-link>

    </div>
</template>

<style scoped>
h2 {
    margin-top: 7rem;
}
</style>