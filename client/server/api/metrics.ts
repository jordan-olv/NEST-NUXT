// server/api/metrics.ts
import { Registry, collectDefaultMetrics, Counter, Histogram } from 'prom-client'
import { defineEventHandler, setHeader } from 'h3'

const register = new Registry()
collectDefaultMetrics({ register })

// Counter: total HTTP requests
const httpRequestsTotal = new Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
})

// Histogram: request duration in seconds
const httpRequestDurationSeconds = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.05, 0.1, 0.3, 0.5, 1, 1.5, 2, 5],
})

register.registerMetric(httpRequestsTotal)
register.registerMetric(httpRequestDurationSeconds)

// Expose Prometheus metrics
export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', register.contentType)
  return await register.metrics()
})

// Export metrics to be used in middleware
export const metrics = {
  httpRequestsTotal,
  httpRequestDurationSeconds,
}
