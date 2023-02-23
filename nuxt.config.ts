// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=500, initial-scale=1',
          title: 'interview',
          meta: [
            { name: 'description', content: 'Frontend Interview Exam Test' }
          ],
        }
      },
    modules: [
        '@nuxtjs/tailwindcss',
    ],
})
