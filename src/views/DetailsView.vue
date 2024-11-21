<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

function handleSubmit(event) {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  const form = event.target;
  if (form.checkValidity()) {
    router.push('/Success'); // Navega a la siguiente ruta si el formulario es válido
  } else {
    form.reportValidity(); // Muestra los mensajes de validación si no es válido
  }
}
</script>

<template>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Información del destinatario</h2>

        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0"
            aria-valuemax="100">
            <div class="progress-bar" style="width: 66%"></div>
        </div>

        <div class="mt-5">
            <form @submit="handleSubmit">
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="senderName" class="form-label">Nombre del remitente:</label>
                    <input type="text" id="senderName" class="form-control" required>
                </div>

                <div class="col-md-6">
                    <label for="recipientName" class="form-label">Nombre del destinatario:</label>
                    <input type="text" id="recipientName" class="form-control" required>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="recipientAddress" class="form-label">Dirreción completa:</label>
                    <input type="text" id="recipientAddress" class="form-control" required>
                </div>

                <div class="col-md-6">
                    <label for="recipientPhone" class="form-label">Teléfono</label>
                    <input type="number" id="recipientPhone" class="form-control" required>
                </div>

            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="recipientContact" class="form-label">Nombre contacto adicional</label>
                    <input type="text" id="recipientContact" class="form-control">
                </div>
                <div class="col-md-6">
                    <label for="phoneContact" class="form-label">Teléfono del contacto</label>
                    <input type="number" id="phoneContact" class="form-control" required>
                </div>
            </div>

            <router-link to="/Service" class="btn btn-warning w-100 mb-3">Regresar</router-link>
            <button type="submit" class="btn btn-success w-100">Siguiente</button>
        </form>
        </div>  
    </div>
</template>

<style scoped>
h2 {
    margin-top: 7rem;
}
</style>