import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './../../../store/store'
import { deleteTask } from './../../../store/slices/tasksSlice'
import { List, ListItem, ListItemText, IconButton, Box } from '@mui/material'
import { Check, Delete } from '@mui/icons-material'

const Tasks: React.FC = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId))
  }

  return (
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
                <Delete />
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
  )
}

export default Tasks
