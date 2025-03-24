// server/api/metrics.ts
import { Registry, collectDefaultMetrics } from 'prom-client'

const registry = new Registry()

collectDefaultMetrics({ register: registry }) // Exemples : CPU, mémoire, etc.

export default defineEventHandler(async (event) => {
  event.node.res.setHeader('Content-Type', registry.contentType)
  return registry.metrics()
})
