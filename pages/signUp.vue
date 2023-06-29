<script setup lang="ts">
const { $post } = useNuxtApp();
const username = ref("");
const password = ref("");
const email = ref("");

async function handleSignUp() {
  const res = await $post("/auth/local/register", {
    username: username.value,
    password: password.value,
    email: email.value,
  });
  console.log(res);
}
</script>
<template>
  <form>
    <input v-model="username" type="text" autocomplete="username" />
    <input v-model="password" type="password" autocomplete="current-password" />
    <input v-model="email" type="email" autocomplete="email" />
    <button type="button" @click="handleSignUp">in</button>
  </form>
</template>
