import React from 'react'
import { TextField, SxProps, Theme } from '@mui/material'

interface LoginFieldProps {
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  sx?: SxProps<Theme>
}

const LoginField: React.FC<LoginFieldProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  sx
}) => (
  <TextField
    label={label}
    variant="outlined"
    type={type}
    fullWidth
    margin="normal"
    value={value}
    onChange={onChange}
    sx={sx}
  />
)

export default LoginField
