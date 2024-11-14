import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './../../store/store'
import {
  addTask,
  deleteTask,
  clearTasks
} from './../../store/slices/tasksSlice'
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Add from '@mui/icons-material/Add'
import CustomMenuIcon from './../TodoPage/CustomMenuIcon/CustomMenuIcon'
import { Check } from '@mui/icons-material'

const TodoPage: React.FC = () => {
  const [taskText, setTaskText] = useState('')
  const dispatch = useDispatch()
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText))
      setTaskText('')
    }
  }

  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId))
  }

  const handleClearTasks = () => {
    dispatch(clearTasks())
  }

  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          sx={{
            mt: 3,
            bgcolor: 'grey',
            borderRadius: 5,
            p: 3
          }}
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleAddTask}
            startIcon={<Add />}
            sx={{
              padding: '8px 50px'
            }}
          >
            Добавить
          </Button>
          <TextField
            label="Пополните список..."
            variant="standard"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            sx={{
              '.MuiInputLabel-root': {
                color: 'white'
              },
              '.MuiInputLabel-root.Mui-focused': {
                color: 'white'
              },
              '.MuiInputBase-root': {
                color: 'white'
              },
              '.MuiInput-underline:after': {
                borderBottomColor: 'white'
              }
            }}
          />
          <Button
            variant="contained"
            size="large"
            color="error"
            onClick={handleClearTasks}
            endIcon={<CustomMenuIcon />}
            sx={{
              padding: '8px 50px'
            }}
          >
            Очистить
          </Button>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          sx={{
            mt: 3,
            bgcolor: 'grey',
            borderRadius: 5,
            p: 3
          }}
        >
          <List
            sx={{
              width: '100%'
            }}
          >
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    color="secondary"
                    onClick={() => handleDeleteTask(task.id)}
                    sx={{ color: '#000000' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                sx={{
                  border: 1,
                  borderRadius: '1% 10px',
                  borderColor: 'white'
                }}
              >
                <ListItemText
                  primary={task.text}
                  sx={{
                    color: 'white'
                  }}
                />
                <Check />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Container>
  )
}

export default TodoPage
