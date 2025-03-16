import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserSessionStore = defineStore("session", () => {
  const user = ref(JSON.parse(localStorage.getItem("user")) || null);

  const setUser = (newUser) => {
    user.value = newUser;
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  return {
    user,
    setUser
  };
})
