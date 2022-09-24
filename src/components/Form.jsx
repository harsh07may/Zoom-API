import React from 'react'
import { useAuth } from './auth'

export default function Form() {
    const auth = useAuth()
  return (
    <div style={{
        color:"white",

    }}>This is the form for {auth.user}</div>
  )
}
