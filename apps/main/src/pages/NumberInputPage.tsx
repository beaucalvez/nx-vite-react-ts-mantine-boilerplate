import { useState } from 'react';
import { Container, Title, Text, Box, Slider, NumberInput, Group, Button, Stack, Paper, Tooltip } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

// Constants for the demo
const CURRENT_USERS = 32;
const INITIAL_TARGET = 50;

export function NumberInputPage() {
  const navigate = useNavigate();
  const [value, setValue] = useState<number>(CURRENT_USERS);
  const [sliderValue, setSliderValue] = useState<number>(CURRENT_USERS);

  const handleSliderChange = (newValue: number) => {
    setSliderValue(newValue);
    setValue(newValue);
  };

  const handleNumberInputChange = (newValue: string | number) => {
    if (newValue === '') {
      setValue(CURRENT_USERS);
      setSliderValue(CURRENT_USERS);
    } else {
      const numValue = typeof newValue === 'string' ? parseFloat(newValue) : newValue;
      setValue(numValue);
      setSliderValue(numValue);
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <Container size="md" py="xl">
      <Title order={1} mb="lg">Number Input Demo</Title>
      
      <Paper shadow="sm" p="md" withBorder mb="xl">
        <Stack gap="md">
          <Text size="sm" c="dimmed">
            This page demonstrates a number input with a slider that allows users to select a value between the current number of users and the maximum possible users.
          </Text>
          
          <Box>
            <Group justify="space-between" mb="xs">
              <Text size="sm" fw={500}>Number of users</Text>
              <Text size="sm" c="dimmed">{formatNumber(value)} users</Text>
            </Group>
            
            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              min={CURRENT_USERS}
              max={CURRENT_USERS + INITIAL_TARGET}
              step={1}
              marks={[
                { value: CURRENT_USERS, label: formatNumber(CURRENT_USERS) },
                { value: CURRENT_USERS + INITIAL_TARGET, label: formatNumber(CURRENT_USERS + INITIAL_TARGET) }
              ]}
              mb="xl"
            />
            
            <Group align="flex-end">
              <NumberInput
                label="Number of users"
                description="Enter a number between current users and maximum possible users"
                value={value}
                onChange={handleNumberInputChange}
                min={CURRENT_USERS}
                max={CURRENT_USERS + INITIAL_TARGET}
                step={1}
                w={200}
              />
              <Button variant="filled" color="blue">
                Update Users
              </Button>
            </Group>
          </Box>
        </Stack>
      </Paper>
      
      <Button variant="outline" onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </Container>
  );
} 