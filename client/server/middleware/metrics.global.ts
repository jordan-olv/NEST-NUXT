// server/middleware/metrics.global.ts
import { defineEventHandler, getMethod, getResponseStatus, getRequestURL } from 'h3'
import { metrics } from '../api/metrics'

export default defineEventHandler(async (event) => {
  const start = Date.now()

  // Wait until response is done
  event._handled = false
  await new Promise((resolve) => {
    event.node.res.on('finish', resolve)
  })

  const duration = (Date.now() - start) / 1000
  const method = getMethod(event)
  const url = getRequestURL(event).pathname
  const status = getResponseStatus(event)?.toString() || '0'

  metrics.httpRequestsTotal.inc({ method, route: url, status })
  metrics.httpRequestDurationSeconds.observe({ method, route: url, status }, duration)
})
