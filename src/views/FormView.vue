<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

function handleSubmit(event) {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  const form = event.target;
  if (form.checkValidity()) {
    router.push('/Service'); // Navega a la siguiente ruta si el formulario es válido
  } else {
    form.reportValidity(); // Muestra los mensajes de validación si no es válido
  }
}
</script>

<template>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Detalles del Envío</h2>

        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: 0%"></div>
        </div>
        
        <form @submit="handleSubmit">
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="length" class="form-label">Largo (cm)</label>
                    <input type="number" id="length" class="form-control" required>
                </div>

                <div class="col-md-6">
                    <label for="width" class="form-label">Ancho (cm)</label>
                    <input type="number" id="width" class="form-control" required>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="height" class="form-label">Altura (cm)</label>
                    <input type="number" id="height" class="form-control" required>
                </div>

                <div class="col-md-6">
                    <label for="weight" class="form-label">Peso (kg)</label>
                    <input type="number" id="weight" class="form-control" required>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="originZip" class="form-label">Código Postal de Origen</label>
                    <input type="number" id="originZip" class="form-control" required>
                </div>

                <div class="col-md-6">
                    <label for="destinationZip" class="form-label">Código Postal de Destino</label>
                    <input type="number" id="destinationZip" class="form-control" required>
                </div>
            </div>

            <router-link to="/" class="btn btn-warning w-100 mb-3">Regresar</router-link>
            <button type="submit" class="btn btn-success w-100">Siguiente</button>
        </form>
    </div>
</template>

<style scoped>
h2 {
  margin-top: 7rem;
}
.container {
  max-width: 600px;
}
</style>