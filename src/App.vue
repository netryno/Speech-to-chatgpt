<script setup lang="ts">
import Login from "./components/Login.vue";
//import Gpt from "./components/Gpt.vue";
</script>

<template>
  <nord-header>
    <h1 class="n-typescale-l">chatgpt con skysevice</h1>
  </nord-header>
  <main class="n-reset n-stack-horizontal">
    <nord-stack class="stack">
      <Login/>
    </nord-stack>
  </main>
</template>

<style>
@import "./assets/base.css";

.stack {
  inline-size: 90%;
  max-inline-size: 340px;
  margin: var(--n-space-xl) auto;
}
</style>
