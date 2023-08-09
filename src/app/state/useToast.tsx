'use client'
import { useState, createContext, useContext } from 'react'

import { ToastStyleType, ToastContextType } from '@/app/types/toast.types'

const initialState = {
  isVisible: false,
  message: '',
  type: 'info' as ToastStyleType,
  showToast: () => null
}

const ToastContext = createContext<ToastContextType>(initialState)

export const ToastProvider = ({ children }: { children: React.ReactElement }) => {
  const [toast, setToast] = useState<Omit<ToastContextType, 'showToast'>>({ isVisible: false, message: '', type: 'info' })

  const showToast = (message: ToastContextType['message'], type: ToastContextType['type']) => {
    setToast({
      ...toast,
      isVisible: true,
      message,
      type
    })

    setTimeout(() => {
      return setToast(initialState)
    }, 5000)
  }

  const value = {
    ...toast,
    showToast
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  )
}

const useToast = () => {
  const context = useContext(ToastContext)

  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

export default useToast
