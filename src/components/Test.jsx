import React from 'react'
import { useSelector } from 'react-redux'

const Test = () => {
    const userData = useSelector(state => state.auth.userData)
  return (
    <div>Welcome, {userData.id}</div>
  )
}

export default Test