import React from 'react'

export default function Logout() {
    localStorage.removeItem('authorLoginStatus')
    window.location.href = '/login'
  return (
    <div></div>
  )
}
