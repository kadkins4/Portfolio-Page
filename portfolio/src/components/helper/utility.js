export const cleanseInput = ( input ) => {
  // one argument: string; return bool
  // regex to prevent special chars
  const regex = /[a-zA-Z]+[ -.]/
  if ( input.match(regex) ) return false
  return input
}

export const lowercase = input => {
  // only take one argument: object, array, or string; return arg type
  if ( typeof input !== 'object' && typeof input !== 'string' ) return 
  if ( typeof input === 'string' ) return input.toLowerCase()
  
  let arr = []
  input.forEach(( i ) => {
    arr.push(i.toLowerCase())
  })
  return arr
}

export const openInNewTab = (url) => {
  var win = window.open(url, '_blank')
  win.focus()
}