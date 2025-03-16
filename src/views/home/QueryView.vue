<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const input = ref('')

watch(input, (value) => {
  router.push({ query: { value } })
})
</script>

<template>
  <h2>Query params</h2>

  <pre>{{ JSON.stringify(route.query) }}</pre>

  <form class="mt-3 block">
    <input
      type="text"
      name="query"
      placeholder="Escribe aquí..."
      v-model="input"
      class="bg-zinc-800 rounded-lg px-3 py-1.5 placeholder:text-zinc-500"
    />
  </form>
</template>
