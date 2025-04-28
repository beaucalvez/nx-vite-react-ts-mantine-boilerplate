import { Box, NumberInput, Slider, Stack, Text, Tooltip } from '@mantine/core';
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

export function UsersPage() {
  const [inputValue, setInputValue] = useState<number | ''>('');
  const [targetPlan, setTargetPlan] = useState(INITIAL_TARGET);

  const handleInputChange = (value: string | number) => {
    // Convert string to number or empty string
    const numValue = value === '' ? '' : Number(value);
    
    // Calculate what the new target plan would be
    const newTarget = Math.max(0, INITIAL_TARGET - (numValue || 0));
    
    // Only update if the new target is greater than or equal to 0 or if the input is being cleared
    if (newTarget >= 0 || numValue === '') {
      setInputValue(numValue);
      setTargetPlan(newTarget);
    }
  };

  // Calculate the total users (current + input)
  const totalUsers = CURRENT_USERS + (inputValue || 0);

  return (
    <Box p="xl">
      <Stack gap="xl">
        {/* First Card */}
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

        {/* Second Card */}
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
      </Stack>
    </Box>
  );
}

export default UsersPage; 