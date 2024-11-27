import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import {
  completeTask,
  trashTask,
  restoreTask
} from '../../../store/slices/tasksSlice'
import {
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import RestoreIcon from '@mui/icons-material/Restore'
import CheckIcon from '@mui/icons-material/Check'
import TasksStyles from './Tasks.style'

const Tasks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0) // Текущая вкладка
  const dispatch = useDispatch()
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  const handleTabChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue)
  }

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === 0) return task.status === 'active'
    if (activeTab === 1) return true // Все дела
    if (activeTab === 2) return task.status === 'completed'
    if (activeTab === 3) return task.status === 'trashed'
    return true
  })

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      sx={TasksStyles.box}
    >
      {/* Вкладки */}
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Текущие дела" sx={TasksStyles.tab} />
        <Tab label="Все дела" sx={TasksStyles.tab} />
        <Tab label="Выполненные дела" sx={TasksStyles.tab} />
        <Tab label="Корзина" sx={TasksStyles.tab} />
      </Tabs>

      {/* Список дел */}
      <List sx={TasksStyles.list}>
        {filteredTasks.map((task) => (
          <ListItem key={task.id} sx={TasksStyles.item}>
            <ListItemText primary={task.text} sx={TasksStyles.text} />
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
        ))}
      </List>
    </Box>
  )
}

export default Tasks
