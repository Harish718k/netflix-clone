import React from 'react'
import { useAuthStore } from '../../store/AuthUser'

export const HomeScreen = () => {
  const {logout} = useAuthStore()

  return (
    <div>HomeScreen
      <button onClick={logout}>logout</button>
    </div>
  )
}
