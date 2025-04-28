import { Container, Title, Text, Button, Stack, Paper } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <Container size="md" py="xl">
      <Title order={1} mb="lg">Welcome to User Management</Title>
      
      <Paper shadow="sm" p="md" withBorder mb="xl">
        <Stack gap="md">
          <Text size="sm" c="dimmed">
            This application helps you manage users across different subscriptions.
          </Text>
          
          <Text>
            You can view, add, and remove users as needed. The application provides
            tools to help you manage your user subscriptions effectively.
          </Text>
          
          <Button 
            variant="filled" 
            color="blue" 
            onClick={() => navigate('/users')}
          >
            Go to Users Page
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
} 