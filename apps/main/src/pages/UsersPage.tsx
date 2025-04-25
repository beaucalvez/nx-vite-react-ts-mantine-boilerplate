import { Box, NumberInput, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';

export function UsersPage() {
  const CURRENT_USERS = 32;
  const INITIAL_TARGET = 50;
  const [inputValue, setInputValue] = useState<number | ''>('');
  const [targetPlan, setTargetPlan] = useState(INITIAL_TARGET);

  const handleInputChange = (value: string | number) => {
    // Convert string to number or empty string
    const numValue = value === '' ? '' : Number(value);
    
    // Calculate what the new target plan would be
    const newTarget = Math.max(0, INITIAL_TARGET - (numValue || 0));
    
    // Only update if the new target is greater than 0 or if the input is being cleared
    if (newTarget > 0 || numValue === '') {
      setInputValue(numValue);
      setTargetPlan(newTarget);
    }
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const getLeftSection = () => {
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
        <span style={{ 
          marginLeft: '2px'
        }}>+</span>
      </span>
    );
  };

  // Calculate the total users (current + input)
  const totalUsers = CURRENT_USERS + (inputValue || 0);

  return (
    <Box p="xl">
      <Stack gap="xl">
        {/* Card */}
        <Box>
          <NumberInput
            label="Users"
            placeholder="new users"
            description={
              <Text size="xs">
                Source plan: <Text component="span" fw={700} c="var(--mantine-color-text)">{formatNumber(targetPlan)}</Text>
              </Text>
            }
            withAsterisk
            leftSection={getLeftSection()}
            w={150}
            hideControls
            allowNegative={false}
            allowDecimal={false}
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
            Target plan: <Text component="span" fw={700} c="var(--mantine-color-text)">{formatNumber(totalUsers)}</Text>
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default UsersPage; 