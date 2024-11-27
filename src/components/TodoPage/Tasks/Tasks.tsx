import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { Tabs, Tab, List, Box } from '@mui/material'
import TasksStyles from './Tasks.style'
import TaskItem from './TaskItem/TaskItem'

const Tasks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0) // Текущая вкладка
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
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={TasksStyles.tabContainer}
      >
        <Tab label="Текущие дела" sx={TasksStyles.tab} />
        <Tab label="Все дела" sx={TasksStyles.tab} />
        <Tab label="Выполненные дела" sx={TasksStyles.tab} />
        <Tab label="Корзина" sx={TasksStyles.tab} />
      </Tabs>

      {/* Список дел */}
      <List sx={TasksStyles.list}>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            activeTab={activeTab}
            sx={{ item: TasksStyles.item, text: TasksStyles.text }}
          />
        ))}
      </List>
    </Box>
  )
}

export default Tasks
