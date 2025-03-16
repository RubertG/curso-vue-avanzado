<script setup>
import { useUserSessionStore } from '@/stores/user/useUserSession'
import { storeToRefs } from 'pinia'

const userSessionStore = useUserSessionStore()
const { user } = storeToRefs(userSessionStore)
</script>

<template>
  <div>
    <h1>Perfil de usuario</h1>

    <p>{{ user }}</p>
  </div>
</template>
