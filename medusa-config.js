import { loadEnv, defineConfig } from '@medusajs/utils'

loadEnv(process.env.NODE_ENV, process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS,
      storeCors: "http://localhost:8000",
      adminCors: "http://localhost:7001",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  }
})
