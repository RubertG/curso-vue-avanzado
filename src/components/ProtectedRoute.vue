<script setup>
import { useUserSessionStore } from '@/stores/user/useUserSession'

const userSessionStore = useUserSessionStore()
</script>

<template>
  <slot v-if="userSessionStore.user" />
</template>
