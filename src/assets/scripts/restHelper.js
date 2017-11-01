'use strict'

export function getErrorMessage (response) {
  let msg = ''
  switch (response.status) {
    case 400:
      // execute case x code block
      msg = response.body.message
      break
    case 401:
      // execute case y code block
      msg = 'Usuario no autenticado'
      break
    case 404:
      // execute case y code block
      msg = 'Servicio no encontrado'
      break
    default:
      // execute default code block
      msg = 'Error en el servicio, por favor intente más tarde'
  }
  return msg
}
