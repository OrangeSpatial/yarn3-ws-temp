<script setup lang="ts">
import { ref, computed } from 'vue'
import { add } from '@demo/shared'

defineProps<{ msg: string }>()

const count = ref(0)
const result = computed(() => add(count.value * 2, count.value * 3))
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>count is {{ count }}</p>
    <button type="button" @click="count++">result is {{ result }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
