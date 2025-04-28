import { Container, Title, Text, Button, Stack, Paper } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export function UsersPage() {
  const navigate = useNavigate();

  return (
    <Container size="md" py="xl">
      <Title order={1} mb="lg">Users Management</Title>
      
      <Paper shadow="sm" p="md" withBorder mb="xl">
        <Stack gap="md">
          <Text size="sm" c="dimmed">
            This page provides an overview of user management features.
          </Text>
          
          <Text>
            The application allows you to manage users across different subscriptions.
            You can view, add, and remove users as needed.
          </Text>
          
          <Button 
            variant="filled" 
            color="blue" 
            onClick={() => navigate('/number-input')}
          >
            Go to Number Input Demo
          </Button>
        </Stack>
      </Paper>
      
      <Button variant="outline" onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </Container>
  );
}

export default UsersPage; 