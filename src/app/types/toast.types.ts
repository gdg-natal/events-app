export type ToastStyleType = 'success' | 'error' | 'warning' | 'info'

export type ToastContextType = {
  isVisible: boolean,
  message: string,
  type: ToastStyleType,
  showToast: (message: string, type: ToastStyleType) => void
}
