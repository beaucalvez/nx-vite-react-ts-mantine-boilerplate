import { AppShell, MantineProvider } from '@mantine/core'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { UsersPage } from './pages/UsersPage'
import { NumberInputPage } from './pages/NumberInputPage'
import { Navigation } from './components/Navigation'

import '@mantine/core/styles.css'

export function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <AppShell padding="md">
          <AppShell.Header>
            <Navigation />
          </AppShell.Header>
          <AppShell.Main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/number-input" element={<NumberInputPage />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
