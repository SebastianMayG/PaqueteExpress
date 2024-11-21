<script setup>

</script>

<template>
    <div class="container mt-5">
        <h2 class="text-center mb-4">¡Envío Creado con Éxito!</h2>

        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0"
            aria-valuemax="100">
            <div class="progress-bar" style="width: 100%"></div>
        </div>

        <div class="mt-5">
            <router-link to="/" class="btn btn-warning w-100 mb-3">Inicio</router-link>
            <router-link to="/form" class="btn btn-success w-100 mb-3">Nuevo envío</router-link>
        </div>  
    </div>
</template>

<style scoped>
h2 {
    margin-top: 7rem;
}
</style>