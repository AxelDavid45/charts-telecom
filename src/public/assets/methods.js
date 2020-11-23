export function rzMethod(data = []) {
  if (!data) {
    throw new Error('missing data parameter')
  }

  return data.map((current) => {
    if (current === 0) {
      current = -1
    }
    return current
  })
}

export function nrzlMethod(data = []) {
  if (!data) {
    throw new Error('missing data parameter')
  }

  return data.map((current) => {
    if (current === 1) {
      current = -1
    } else {
      current = 1
    }

    return current
  })
}

export function nrziMethod(data = []) {
  if (!data) {
    throw new Error('missing data parameter')
  }

  let previous = data[0]
  for (let i = 1; i <= data.length - 1; i++) {
    if (data[i] === 0) {
      data[i] = previous
    } else {
      if (previous === 0) {
        data[i] = 1
      } else {
        data[i] = 0
      }
    }

    previous = data[i]
  }
  return data
}

export function amiMethod(data = []) {
  if (!data) {
    throw new Error('missing data parameter')
  }

  let previous = null
  for (let i = 0; i <= data.length; i++) {
    if (data[i] === 1) {
      if (previous === null) {
        previous = 1
      } else {
        if (previous > 0) {
          data[i] = -1
          previous = -1
        } else {
          data[i] = 1
          previous = 1
        }
      }
    }
  }
  return data
}

export function pseudoMethod(data = []) {
  if (!data) {
    throw new Error('missing data parameter')
  }

  let previous = null
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 1) {
      data[i] = 0
    } else {
      if (previous === null) {
        previous = 1
      } else {
        if (previous > 0) {
          data[i] = -1
          previous = -1
        } else {
          data[i] = 1
          previous = 1
        }
      }
    }
  }
  return data
}

export function manchesterMethod(data = []) {
  if (!data) {
    throw new Error('missing data parameter')
  }

  return data.map((current) => {
    if (current === 0) {
      current = 1
    } else {
      current = 0
    }

    return current
  })
}
