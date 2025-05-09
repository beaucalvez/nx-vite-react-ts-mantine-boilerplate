import { Box, NumberInput, Text, Tooltip, Switch, Stack } from '@mantine/core';
import { useState } from 'react';

const CURRENT_USERS = 100;
const INITIAL_TARGET = 750;

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num);
};

export function NumberInputPage() {
  const [inputValue, setInputValue] = useState<number | ''>('');
  const [targetPlan, setTargetPlan] = useState(INITIAL_TARGET);
  const [isFullUpgrade, setIsFullUpgrade] = useState(false);

  const handleInputChange = (value: string | number) => {
    const numValue = value === '' ? '' : Number(value);
    const newTarget = Math.max(0, INITIAL_TARGET - (numValue || 0));
    if (newTarget >= 0 || numValue === '') {
      setInputValue(numValue);
      setTargetPlan(newTarget);
      // Turn off full upgrade if user manually changes the value
      if (isFullUpgrade && numValue !== INITIAL_TARGET) {
        setIsFullUpgrade(false);
      }
    }
  };

  const handleFullUpgradeChange = (checked: boolean) => {
    setIsFullUpgrade(checked);
    if (checked) {
      setInputValue(INITIAL_TARGET);
      setTargetPlan(0);
    } else {
      setInputValue('');
      setTargetPlan(INITIAL_TARGET);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      event.stopPropagation();
      const currentValue = inputValue === '' ? 0 : Number(inputValue);
      const step = event.shiftKey ? 10 : 1;
      const newValue = event.key === 'ArrowUp' 
        ? Math.min(INITIAL_TARGET, currentValue + step)
        : Math.max(0, currentValue - step);
      handleInputChange(newValue);
    }
  };

  const totalUsers = CURRENT_USERS + (inputValue || 0);

  return (
    <Box>
      <Text size="sm" fw={500} mb={5}>Users</Text>
      <Switch
        label="Full upgrade"
        checked={isFullUpgrade}
        onChange={(event) => handleFullUpgradeChange(event.currentTarget.checked)}
        mb="xs"
      />
      <NumberInput
        placeholder="Add new users"
        withAsterisk
        w={150}
        hideControls
        allowNegative={false}
        allowDecimal={false}
        max={INITIAL_TARGET}
        value={inputValue}
        onChange={handleInputChange}
        step={1}
        onKeyDownCapture={handleKeyDown}
        styles={{
          input: { 
            fontSize: '1.2rem',
            lineHeight: '1.2rem',
            paddingBottom: '1px',
            '&::placeholder': {
              color: 'var(--mantine-color-dimmed) !important',
              opacity: 1,
            }
          }
        }}
        onFocus={(event) => {
          // Select all text when focused
          event.target.select();
        }}
      />
      <Box mt={10}>
        <Text size="sm" c="dimmed" mb={2}>
          Source plan: <Tooltip label="Number of users you can add from the source subscription">
            <Text component="span" fw={700} c="var(--mantine-color-blue-6)" style={{ cursor: 'help' }}>{formatNumber(targetPlan)}</Text>
          </Tooltip>
        </Text>
        <Text size="sm" c="dimmed">
          Target plan: <Tooltip label="Current users in this target subscription">
            <Text component="span" fw={700} c="var(--mantine-color-blue-6)" style={{ cursor: 'help' }}>{formatNumber(totalUsers)}</Text>
          </Tooltip>
        </Text>
      </Box>
    </Box>
  );
}

export default NumberInputPage; 