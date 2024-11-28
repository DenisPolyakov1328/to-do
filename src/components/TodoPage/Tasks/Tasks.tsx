import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { filterTasks, calculateTaskCounts } from '../../../utils/taskUtils'
import { List, Box } from '@mui/material'
import TasksStyles from './Tasks.style'
import TaskItem from './TaskItem/TaskItem'
import TaskTabs from './TaskTabs/TaskTabs'

const Tasks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0) // Текущая вкладка
  const tasks = useSelector((state: RootState) => state.tasks.tasks)
  const taskCounts = calculateTaskCounts(tasks)
  const filteredTasks = filterTasks(tasks, activeTab)

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
      <TaskTabs
        activeTab={activeTab}
        taskCounts={taskCounts}
        onChange={handleTabChange}
        styles={TasksStyles}
      />

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
