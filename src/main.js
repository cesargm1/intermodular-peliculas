import { createApp } from 'vue'
import App from './App.vue'
import Particles from '@tsparticles/vue3'
import { loadSlim } from "@tsparticles/slim";
const app = createApp(App)

app.use(Particles, {
  init: async (engine) => {
    // Carga la versión completa de tsParticles
    await loadSlim(engine)
  },
})

app.mount('#app')
