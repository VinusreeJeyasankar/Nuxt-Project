declare module '#auth' {
  const getServerSession: typeof import('/home/st/Nuxt-Project/node_modules/@sidebase/nuxt-auth/dist/runtime/server/services').getServerSession
  const getToken: typeof import('/home/st/Nuxt-Project/node_modules/@sidebase/nuxt-auth/dist/runtime/server/services').getToken
  const NuxtAuthHandler: typeof import('/home/st/Nuxt-Project/node_modules/@sidebase/nuxt-auth/dist/runtime/server/services').NuxtAuthHandler

}