import {
  amiMethod,
  manchesterMethod,
  nrziMethod,
  nrzlMethod,
  pseudoMethod,
  rzMethod,
} from './methods.js'

export function transformToArray(data = '') {
  const transformed = data.split('')
  return {
    integers: transformed.map((curret) => parseInt(curret)),
    strings: data.split(''),
  }
}

export function generateNumbers(methodType, data) {
  if (methodType === 'rz') {
    return rzMethod(data)
  }

  if (methodType === 'nrzl') {
    return nrzlMethod(data)
  }

  if (methodType === 'nrzi') {
    return nrziMethod(data)
  }

  if (methodType === 'ami') {
    return amiMethod(data)
  }

  if (methodType === 'pseudo') {
    return pseudoMethod(data)
  }

  if (methodType === 'manchester') {
    return manchesterMethod(data)
  }

  throw new Error('method not supported')
}
