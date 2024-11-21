import { Container, Box } from '@mui/material'
import Header from './Header/Header'
import Tasks from './Tasks/Tasks'

const TodoPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Header />
        <Tasks />
      </Box>
    </Container>
  )
}

export default TodoPage
