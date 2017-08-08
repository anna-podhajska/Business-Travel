export function toDateOnly(dateString) {
  let newDate = new Date(dateString)
  return newDate.toISOString().split('T')[0]
}

export function toDateAndHour(dateString) {
  let newDate = new Date(dateString)
  return newDate.toLocaleDateString('en-NZ')
}
