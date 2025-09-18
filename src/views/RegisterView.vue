<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const router = useRouter();

const register = () => {
  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    alert("Por favor llena todos los campos");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Las contraseñas no coinciden");
    return;
  }

  // Aquí podrías guardar datos en una API o localStorage
  alert(`Usuario ${name.value} registrado correctamente`);
  router.push("/home");
};
</script>

<template>
  <div class="register-container">
    <h2>Registro</h2>
    <form @submit.prevent="register">
      <div>
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="name" required />
      </div>

      <div>
        <label for="email">Correo:</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <div>
        <label for="confirmPassword">Confirmar Contraseña:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>

      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<style scoped>
.register-container {
  max-width: 350px;
  margin: 80px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  background: #f9f9f9;
}

.register-container h2 {
  margin-bottom: 20px;
}

.register-container div {
  margin-bottom: 15px;
  text-align: left;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #1976d2;
}
</style>
