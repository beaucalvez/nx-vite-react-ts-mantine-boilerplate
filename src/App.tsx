import { AppShell, Button, Container, Group, Title } from '@mantine/core';
import { useState } from 'react';
import SliderPage from './components/SliderPage';
import NumberInputPage from './components/NumberInputPage';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('slider');

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Container h="100%">
          <Group h="100%" px="md" justify="space-between">
            <Title order={3}>Full Partial Upgrade UI Prototypes</Title>
            <Group>
              <Button 
                variant={activePage === 'slider' ? 'filled' : 'light'} 
                onClick={() => setActivePage('slider')}
              >
                Slider
              </Button>
              <Button 
                variant={activePage === 'number-input' ? 'filled' : 'light'} 
                onClick={() => setActivePage('number-input')}
              >
                Number Input
              </Button>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container>
          {activePage === 'slider' && <SliderPage />}
          {activePage === 'number-input' && <NumberInputPage />}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
} 