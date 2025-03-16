<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { useRouter } from 'vue-router'

const route = useRouter()

const handleGoBack = () => {
  route.push('/ruta-dinamica')
}
</script>

<template>
  <h1 class="text-xl font-bold">Pagina con ruta dinámica</h1>
  <RouterView />

  <button @click="handleGoBack" class="px-3 py-2 bg-green-900 text-white rounded-lg cursor-pointer">
    Volver a principal
  </button>

  <RouterLink :to="{ name: 'ruta-dinamica-id', params: { id: '1' } }">Ruta dinámica 1</RouterLink>
  <RouterLink :to="{ name: 'ruta-dinamica-id', params: { id: '2' } }">Ruta dinámica 2</RouterLink>
  <RouterLink :to="{ name: 'ruta-dinamica-id', params: { id: '3' } }">Ruta dinámica 3</RouterLink>
</template>
