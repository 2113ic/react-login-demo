import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function DefaultLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/search')
  })

  return null
}

export default DefaultLayout
