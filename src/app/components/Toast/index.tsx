'use client'
import useToast from '@/app/state/useToast'

import { Wrapper } from './styles'

const Toast = () => {
  const { isVisible, message, type } = useToast()

  console.log('toast', isVisible, message, type)

  if (!isVisible) return null

  return (
    <Wrapper type={type}>
      <p>{message}</p>
    </Wrapper>
  )
}

export default Toast