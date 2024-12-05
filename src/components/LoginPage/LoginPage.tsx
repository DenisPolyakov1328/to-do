import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/slices/authSlice'
import { Box, Button, Typography, Container } from '@mui/material'
import LoginField from './LoginField/LoginField'
import { loginSchema, LoginFormValues } from '../../utils/validationSchemas'
import loginPageStyles from './LoginPage.styles'

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: ''
    },
    mode: 'onChange'
  })

  const onSubmit = (data: LoginFormValues) => {
    dispatch(loginUser(data))
    if (!localStorage.getItem('isAuthenticated')) {
      alert('Неверное имя пользователя или пароль')
    }
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
          onSubmit={handleSubmit(onSubmit)}
          sx={loginPageStyles.boxField}
          noValidate
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <LoginField
                {...field}
                label="Имя пользователя"
                error={!!errors.username}
                helperText={errors.username?.message}
                sx={loginPageStyles.textField}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <LoginField
                {...field}
                label="Пароль"
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={loginPageStyles.textField}
                isPasswordField={true}
              />
            )}
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

export default LoginPage
