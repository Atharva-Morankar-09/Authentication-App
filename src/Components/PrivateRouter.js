import React from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Navigate } from 'react-router-dom'

export default function PrivateRouter({children}) {

  const { currUser } = useAuth()
  return currUser? children:<Navigate to="/login" />
}
