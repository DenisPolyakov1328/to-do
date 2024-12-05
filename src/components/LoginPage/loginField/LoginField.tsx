import React, { useState, forwardRef } from 'react'
import {
  TextField,
  IconButton,
  InputAdornment,
  SxProps,
  Theme
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface InputFieldProps {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  helperText?: string
  sx?: SxProps<Theme>
  isPasswordField?: boolean
}

const LoginField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { label, value, onChange, error, helperText, sx, isPasswordField = false },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev)
    }

    return (
      <TextField
        {...{ label, value, onChange, error, helperText, sx }}
        type={isPasswordField && !showPassword ? 'password' : 'text'}
        variant="outlined"
        fullWidth
        margin="normal"
        inputRef={ref}
        InputProps={
          isPasswordField
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? (
                        <VisibilityOff sx={{ color: 'white' }} />
                      ) : (
                        <Visibility sx={{ color: 'white' }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }
            : undefined
        }
      />
    )
  }
)

export default LoginField
