import { Group, Button, Container } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHome = location.pathname === '/';
  const isUsersPage = location.pathname === '/users';
  const isNumberInputPage = location.pathname === '/number-input';
  
  return (
    <Container size="md" py="md">
      <Group justify="space-between">
        <Group>
          <Button 
            variant={isHome ? "filled" : "light"} 
            onClick={() => navigate('/')}
          >
            Home
          </Button>
          <Button 
            variant={isUsersPage ? "filled" : "light"} 
            onClick={() => navigate('/users')}
          >
            Users
          </Button>
          <Button 
            variant={isNumberInputPage ? "filled" : "light"} 
            onClick={() => navigate('/number-input')}
          >
            Number Input
          </Button>
        </Group>
      </Group>
    </Container>
  );
} 