import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Adicionando as importações do Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Importante para os ícones funcionarem

import App from './App.vue'
import router from './router'

const hseTheme = {
  dark: false,
  colors: {
    primary: '#485A84', // O azul do seu logo
    secondary: '#5F7C50', // O verde mais fechado
    accent: '#8AAA79', // Verde médio
    background: '#F5F5F5', // Um cinza bem clarinho para o fundo do site
    surface: '#FFFFFF',
    info: '#D4DFCE', // O verde bem clarinho (para fundos de seção)
    success: '#8AAA79',
    grey: '#C0C0C0', // O cinza do logo
  },
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'hseTheme',
    themes: {
      hseTheme,
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify) // Dizendo ao Vue para usar o Vuetify

app.mount('#app')
