import { ThemeProvider } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'
import { AppShell } from '@mantine/core'
import React from 'react'

import { UsersPage } from './pages/UsersPage'

import '@mantine/core/styles.css'

export function App() {
  return (
    <ThemeProvider>
      <AppShell padding="md">
        <AppShell.Main>
          <UsersPage />
        </AppShell.Main>
      </AppShell>
    </ThemeProvider>
  )
}

export default App
