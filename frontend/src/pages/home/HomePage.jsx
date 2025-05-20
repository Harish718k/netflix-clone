import React from 'react'
import { HomeScreen } from './HomeScreen'
import { AuthScreen } from './AuthScreen'

export const HomePage = () => {
  const user = false
  return (
    <div>
      {user ? <HomeScreen/> : <AuthScreen />}
    </div>
  )
}
