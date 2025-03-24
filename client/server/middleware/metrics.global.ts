import { defineEventHandler, getMethod, getResponseStatus, getRequestURL } from 'h3'
import { metrics } from '../api/metrics'

export default defineEventHandler(async (event) => {
  const start = Date.now()

  event.node.res.on('finish', () => {
    const duration = (Date.now() - start) / 1000
    const method = getMethod(event)
    const url = getRequestURL(event).pathname
    const status = getResponseStatus(event)?.toString() || '0'

    metrics.httpRequestsTotal.inc({ method, route: url, status })
    metrics.httpRequestDurationSeconds.observe({ method, route: url, status }, duration)
  })
})
