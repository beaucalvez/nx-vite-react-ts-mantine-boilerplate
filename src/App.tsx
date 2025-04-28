import { AppShell, Button, Container, Group, Stack, Text, Title } from '@mantine/core';
import { useState } from 'react';
import UsersPage from '../apps/main/src/pages/UsersPage';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('users');

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Container h="100%">
          <Group h="100%" px="md" justify="space-between">
            <Title order={3}>Mantine React App</Title>
            <Group>
              <Button 
                variant={activePage === 'users' ? 'filled' : 'light'} 
                onClick={() => setActivePage('users')}
              >
                Users
              </Button>
              <Button 
                variant={activePage === 'settings' ? 'filled' : 'light'} 
                onClick={() => setActivePage('settings')}
              >
                Settings
              </Button>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container>
          {activePage === 'users' && <UsersPage />}
          {activePage === 'settings' && (
            <Stack>
              <Title order={2}>Settings</Title>
              <Text>Settings page content will go here.</Text>
            </Stack>
          )}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
} 