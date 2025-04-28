import { AppShell, MantineProvider } from '@mantine/core'
import React from 'react'

import { UsersPage } from './pages/UsersPage'

import '@mantine/core/styles.css'

export function App() {
  return (
    <MantineProvider>
      <AppShell>
        <AppShell.Header>
        </AppShell.Header>
        <AppShell.Main>
          <UsersPage />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  )
}

export default App
