import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask, clearTasks } from './../../../store/slices/tasksSlice'
import { TextField, Box } from '@mui/material'
import CustomMenuIcon from './CustomMenuIcon/CustomMenuIcon'
import { Add } from '@mui/icons-material'
import headerStyles from './Header.styles'
import CustomButton from './CustomButton/CustomButton'

const Header: React.FC = () => {
  const [taskText, setTaskText] = useState('')
  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText))
      setTaskText('')
    }
  }

  const handleClearTasks = () => {
    dispatch(clearTasks())
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      sx={headerStyles.container}
    >
      <CustomButton
        color="primary"
        onClick={handleAddTask}
        icon={<Add />}
        iconPosition="start"
        sx={headerStyles.button}
      >
        Добавить
      </CustomButton>
      <TextField
        label="Пополните список..."
        variant="standard"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        sx={headerStyles.textField}
      />
      <CustomButton
        color="error"
        onClick={handleClearTasks}
        icon={<CustomMenuIcon />}
        iconPosition="end"
        sx={headerStyles.button}
      >
        Очистить
      </CustomButton>
    </Box>
  )
}

export default Header
