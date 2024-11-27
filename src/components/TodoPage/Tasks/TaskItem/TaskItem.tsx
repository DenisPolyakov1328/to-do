import { useDispatch } from 'react-redux'
import {
  completeTask,
  trashTask,
  restoreTask
} from '../../../../store/slices/tasksSlice'
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

interface Task {
  id: string
  text: string
  status: 'active' | 'completed' | 'trashed'
}

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

  return (
    <ListItem key={task.id} sx={sx.item}>
      <ListItemText primary={task.text} sx={sx.text} />
      {activeTab !== 3 && ( // Кнопки для активных дел
        <>
          <IconButton onClick={() => dispatch(completeTask(task.id))}>
            <CheckIcon />
          </IconButton>
          <IconButton onClick={() => dispatch(trashTask(task.id))}>
            <DeleteIcon />
          </IconButton>
        </>
      )}
      {activeTab === 3 && ( // Кнопка восстановления из корзины
        <IconButton onClick={() => dispatch(restoreTask(task.id))}>
          <RestoreIcon />
        </IconButton>
      )}
    </ListItem>
  )
}

export default TaskItem
