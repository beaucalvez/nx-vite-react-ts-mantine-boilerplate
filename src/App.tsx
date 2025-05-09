import { AppShell, Button, Container, Group, Title } from '@mantine/core';
import { useState } from 'react';
import SliderPage from '../apps/main/src/components/SliderPage';
import NumberInputPage from '../apps/main/src/components/NumberInputPage';
import '@mantine/core/styles.css';

export default function App() {
  const [activePage, setActivePage] = useState('number-input');


  
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
                variant={activePage === 'number-input' ? 'filled' : 'light'} 
                onClick={() => setActivePage('number-input')}
              >
                Number Input
              </Button>
              <Button 
                variant={activePage === 'slider' ? 'filled' : 'light'} 
                onClick={() => setActivePage('slider')}
              >
                Slider
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