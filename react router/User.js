import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const data=useParams();
  return (
    <>
    <h2>User page.{data.id}</h2>
    </>
  )
}

export default User