import { defineConfig, envField } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'


import vercel from '@astrojs/vercel';
import vercel from '@astrojs/vercel/serverless'


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      // * Es posible definir el tipo de valor, donde usar y que acceso poseen las variables de entorno
      SHOW_BUY_BUTTON: envField.boolean({context: 'server', access: 'public' }),
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
    }
  },

  output: 'server',
  adapter: vercel()
})