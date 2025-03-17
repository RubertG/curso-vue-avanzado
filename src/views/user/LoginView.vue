<script setup>
import { useUserSessionStore } from '@/stores/user/useUserSession'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userSessionStore = useUserSessionStore()
const email = ref('')
const password = ref('')

const login = () => {
  if (!email.value || !password.value) {
    alert('Por favor, rellena todos los campos.')

    return
  }

  userSessionStore.setUser(email.value)
  router.replace({ name: 'profile' })
}
</script>

<template>
  <h2 class="mt-5 text-center">Login</h2>

  <form class="mt-4 space-y-2 mx-auto max-w-sm" @submit.prevent="login">
    <input
      type="text"
      v-model="email"
      placeholder="Email"
      class="block w-full bg-zinc-800 rounded-lg px-3 py-1.5 placeholder:text-zinc-500"
    />
    <input
      type="password"
      v-model="password"
      placeholder="Password"
      class="block w-full bg-zinc-800 rounded-lg px-3 py-1.5 placeholder:text-zinc-500"
    />
    <button
      @click.prevent="login"
      class="block w-full px-3 py-1.5 bg-green-900 text-white rounded-lg cursor-pointer"
    >
      Login
    </button>
  </form>
</template>
