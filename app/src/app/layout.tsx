import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GDG Natal',
  description: 'Página oficial do Google Developer Groups - Natal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
