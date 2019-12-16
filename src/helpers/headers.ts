import { isPlainObject } from './util'

function normallizeHeaderName(headers: any, normallizeName: string): void {
  if (!headers) {
    return
  }

  Object.keys(headers).forEach(name => {
    if (name !== normallizeName && name.toUpperCase() === normallizeName.toUpperCase()) {
      headers[normallizeName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: string): any {
  normallizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }
  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })
  return parsed
}
