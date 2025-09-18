<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const login = () => {
  if (email.value && password.value) {
    router.push("/");
  } else {
    alert("Por favor ingresa correo y contraseña");
  }
};
</script>

<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Correo:</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit">Ingresar</button>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 50px auto;
  margin-top: 150px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  background: #f9f9f9;
}


.login-container h2 {
  margin-bottom: 20px;
}

.login-container div {
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
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
