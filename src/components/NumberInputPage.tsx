import { Box, NumberInput, Text, Tooltip } from '@mantine/core';
import { useState } from 'react';

const CURRENT_USERS = 32;
const INITIAL_TARGET = 50;

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num);
};

const getLeftSection = (inputValue: number | '') => {
  const hasValue = inputValue !== 0 && inputValue !== '';
  return (
    <span style={{ 
      color: hasValue ? 'var(--mantine-color-gray-6)' : 'var(--mantine-color-dark-4)',
      width: '55px',
      display: 'inline-block',
      textAlign: 'right',
      fontSize: '1.2rem',
      marginLeft: '10px'
    }}>
      {formatNumber(CURRENT_USERS)}
      <span style={{ marginLeft: '2px' }}>+</span>
    </span>
  );
};

export function NumberInputPage() {
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
      <NumberInput
        label="Users"
        placeholder="new users"
        description={
          <Text size="xs">
            Source plan: <Tooltip label="Number of users you can add from the source subscription">
              <Text component="span" fw={700} c="var(--mantine-color-blue-6)" style={{ cursor: 'help' }}>{formatNumber(targetPlan)}</Text>
            </Tooltip>
          </Text>
        }
        withAsterisk
        leftSection={getLeftSection(inputValue)}
        w={150}
        hideControls
        allowNegative={false}
        allowDecimal={false}
        max={INITIAL_TARGET}
        value={inputValue}
        onChange={handleInputChange}
        styles={{
          input: { 
            fontSize: '1.2rem',
            lineHeight: '1.2rem',
            paddingBottom: '1px',
            paddingLeft: '45px',
            '&::placeholder': {
              color: 'var(--mantine-color-dimmed) !important',
              opacity: 1,
            }
          }
        }}
      />
      <Text size="xs" c="dimmed" mt={5}>
        Target plan: <Tooltip label="Current users in this target subscription">
          <Text component="span" fw={700} c="var(--mantine-color-blue-6)" style={{ cursor: 'help' }}>{formatNumber(totalUsers)}</Text>
        </Tooltip>
      </Text>
    </Box>
  );
}

export default NumberInputPage; 