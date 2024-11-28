import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { Tabs, Tab, Typography, List, Box } from '@mui/material'
import TasksStyles from './Tasks.style'
import TaskItem from './TaskItem/TaskItem'

const Tasks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0) // Текущая вкладка
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  // Подсчёт задач для каждой вкладки
  const currentTasksCount = tasks.filter(
    (task) => task.status === 'active'
  ).length
  const allTasksCount = tasks.length
  const completedTasksCount = tasks.filter(
    (task) => task.status === 'completed'
  ).length
  const trashedTasksCount = tasks.filter(
    (task) => task.status === 'trashed'
  ).length

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === 0) return task.status === 'active'
    if (activeTab === 1) return true // Все дела
    if (activeTab === 2) return task.status === 'completed'
    if (activeTab === 3) return task.status === 'trashed'
    return true
  })

  const handleTabChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue)
  }

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
        <Tab
          label={
            <>
              <Typography variant="body1">ТЕКУЩИЕ ДЕЛА</Typography>
              {currentTasksCount > 0 && (
                <Typography variant="body1" sx={{ marginLeft: 1 }}>
                  ({currentTasksCount})
                </Typography>
              )}
            </>
          }
          sx={TasksStyles.tab}
        />
        <Tab
          label={
            <>
              <Typography variant="body1">ВСЕ ДЕЛА</Typography>
              {allTasksCount > 0 && (
                <Typography variant="body1" sx={{ marginLeft: 1 }}>
                  ({allTasksCount})
                </Typography>
              )}
            </>
          }
          sx={TasksStyles.tab}
        />
        <Tab
          label={
            <>
              <Typography variant="body1">ВЫПОЛНЕННЫЕ ДЕЛА</Typography>
              {completedTasksCount > 0 && (
                <Typography variant="body1" sx={{ marginLeft: 1 }}>
                  ({completedTasksCount})
                </Typography>
              )}
            </>
          }
          sx={TasksStyles.tab}
        />
        <Tab
          label={
            <>
              <Typography variant="body1">КОРЗИНА</Typography>
              {trashedTasksCount > 0 && (
                <Typography variant="body1" sx={{ marginLeft: 1 }}>
                  ({trashedTasksCount})
                </Typography>
              )}
            </>
          }
          sx={TasksStyles.tab}
        />
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
