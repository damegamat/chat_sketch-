import { useCallback } from 'react'
import { useNavigate } from 'react-router'

export const useNavigateTo = ({ path } = {}) => {
  const navigate = useNavigate()

  const navigateTo = useCallback((id) => navigate(`${path}/${id}`), [
    path,
    navigate,
  ])

  return { navigateTo }
}
