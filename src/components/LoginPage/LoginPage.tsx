import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/slices/authSlice'
import { Box, Button, Typography, Container } from '@mui/material'
import LoginField from './loginField/LoginField'
import loginPageStyles from './LoginPage.styles'

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(loginUser({ username, password }))
  }

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={loginPageStyles.header}
        >
          Вход
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={loginPageStyles.boxField}
        >
          <LoginField
            label="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={loginPageStyles.textField}
          />
          <LoginField
            label="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={loginPageStyles.textField}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Войти
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Login
