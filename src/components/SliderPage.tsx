import { Box, Slider, Text, Tooltip } from '@mantine/core';
import { useState } from 'react';

const CURRENT_USERS = 100;
const INITIAL_TARGET = 750;

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num);
};

export function SliderPage() {
  const [inputValue, setInputValue] = useState<number | ''>('');
  const [targetPlan, setTargetPlan] = useState(INITIAL_TARGET);

  const handleInputChange = (value: string | number) => {
    const numValue = value === '' ? '' : Number(value);
    const newTarget = Math.max(0, INITIAL_TARGET - (numValue || 0));
    if (newTarget >= 0 || numValue === '') {
      setInputValue(numValue);
      setTargetPlan(newTarget);
    }
  };

  const totalUsers = CURRENT_USERS + (inputValue || 0);

  return (
    <Box>
      <Text size="sm" fw={500} mb={5}>Users</Text>
      <Text size="xs" c="dimmed" mt={5}>
        Source plan: <Tooltip label="Number of users you can add from the source subscription">
          <Text component="span" fw={700} c="var(--mantine-color-blue-6)" style={{ cursor: 'help' }}>{formatNumber(targetPlan)}</Text>
        </Tooltip>
      </Text>
      <Box w={150} mt="md" mb="xl">
        <Slider
          value={totalUsers}
          onChange={(value) => {
            const newInputValue = value - CURRENT_USERS;
            handleInputChange(newInputValue);
          }}
          min={CURRENT_USERS}
          max={CURRENT_USERS + INITIAL_TARGET}
          step={1}
          marks={[
            { value: CURRENT_USERS, label: formatNumber(CURRENT_USERS) },
            { value: CURRENT_USERS + INITIAL_TARGET, label: formatNumber(CURRENT_USERS + INITIAL_TARGET) }
          ]}
          styles={{
            track: {
              height: 8,
            },
            thumb: {
              height: 20,
              width: 20,
            },
            mark: {
              width: 2,
              height: 8,
            },
            markLabel: {
              fontSize: '0.8rem',
            }
          }}
        />
      </Box>
      <Text size="xs" c="dimmed" mt={5}>
        Target plan: <Tooltip label="Current users in this target subscription">
          <Text component="span" fw={700} c="var(--mantine-color-blue-6)" style={{ cursor: 'help' }}>{formatNumber(totalUsers)}</Text>
        </Tooltip>
      </Text>
    </Box>
  );
}

export default SliderPage; 