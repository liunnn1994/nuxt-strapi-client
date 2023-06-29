<script setup lang="ts">
const { $post } = useNuxtApp();
const identifier = ref("");
const password = ref("");

async function handleSignIn() {
  const res = await $post("/auth/local", {
    identifier: identifier.value,
    password: password.value,
  });
  console.log(res);
}
</script>
<template>
  <form>
    <input v-model="identifier" type="text" autocomplete="username" />
    <input v-model="password" type="password" autocomplete="current-password" />
    <button type="button" @click="handleSignIn">in</button>
  </form>
</template>
