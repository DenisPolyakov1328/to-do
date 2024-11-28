import { useDispatch } from 'react-redux'
import { updateTaskStatus } from '../../../../store/slices/tasksSlice'
import {
  ListItem,
  ListItemText,
  IconButton,
  SxProps,
  Theme
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import RestoreIcon from '@mui/icons-material/Restore'
import CheckIcon from '@mui/icons-material/Check'
import { Task } from '../../../../types/taskTypes'

interface TaskItemProps {
  task: Task
  activeTab: number
  sx: {
    item: SxProps<Theme>
    text: SxProps<Theme>
  }
}

const TaskItem: React.FC<TaskItemProps> = ({ task, activeTab, sx }) => {
  const dispatch = useDispatch()

  const handleUpdateTaskStatus = (
    status: 'active' | 'completed' | 'trashed'
  ) => {
    dispatch(updateTaskStatus({ id: task.id, status }))
  }

  return (
    <ListItem key={task.id} sx={sx.item}>
      <ListItemText primary={task.text} sx={sx.text} />
      {activeTab !== 3 && ( // Кнопки для активных дел
        <>
          <IconButton onClick={() => handleUpdateTaskStatus('completed')}>
            <CheckIcon />
          </IconButton>
          <IconButton onClick={() => handleUpdateTaskStatus('trashed')}>
            <DeleteIcon />
          </IconButton>
        </>
      )}
      {activeTab === 3 && ( // Кнопка восстановления из корзины
        <IconButton onClick={() => handleUpdateTaskStatus('active')}>
          <RestoreIcon />
        </IconButton>
      )}
    </ListItem>
  )
}

export default TaskItem
