import { Group, Button, Container, Title } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHome = location.pathname === '/';
  const isUsersPage = location.pathname === '/users';
  const isNumberInputPage = location.pathname === '/number-input';
  
  return (
    <Container size="md" py="md">
      <Group justify="space-between" align="center">
        <Title order={3}>User Management</Title>
        <Group>
          <Button 
            variant={isHome ? "filled" : "light"} 
            onClick={() => navigate('/')}
            radius="md"
          >
            Home
          </Button>
          <Button 
            variant={isUsersPage ? "filled" : "light"} 
            onClick={() => navigate('/users')}
            radius="md"
          >
            Users
          </Button>
          <Button 
            variant={isNumberInputPage ? "filled" : "light"} 
            onClick={() => navigate('/number-input')}
            radius="md"
          >
            Number Input
          </Button>
        </Group>
      </Group>
    </Container>
  );
} 