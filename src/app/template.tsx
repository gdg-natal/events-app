'use client'
import GlobalStyle from "./GlobalStyles"
import { ToastProvider } from "@/app/state/useToast"
import { Toast } from '@/app/components'

const Template = ({ children }: { children: React.ReactElement }) => (
  <ToastProvider>
    <>
      <GlobalStyle />
      <Toast />
      {children}
    </>
  </ToastProvider>
)

export default Template
