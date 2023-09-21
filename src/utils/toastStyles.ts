export  const emailRegex = /^[a-zA-Z\d]+[@][a-zA-Z\d]{2,}\.[a-z]{2,4}$/
export const phoneRegex = /^[\d]{10,13}$/

export const validEntry = { isValidPhoneNumber: false, isValidEmail: false }

export const ErrorStyle = {
  duration: 8000,
  icon: '💀',
  style: {
    background: '#FF0000',
    color: '#FFFFFF',
    fontSize: '13px'
  }
}

export const SuccessStyle = {
  duration: 8000,
  icon: '🔥',
  style: {
    background: '#3CB371',
    color: '#FFFFFF',
    fontSize: '13px'
  }
}