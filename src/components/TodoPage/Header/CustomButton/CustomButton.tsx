import React from 'react'
import { Button, SxProps, Theme } from '@mui/material'

interface CustomButtonProps {
  onClick: () => void
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
  color: 'primary' | 'error'
  children: React.ReactNode
  style: SxProps<Theme>
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  icon,
  color,
  children,
  style,
  iconPosition = 'start'
}) => (
  <Button
    variant="contained"
    size="large"
    color={color}
    onClick={onClick}
    startIcon={iconPosition === 'start' ? icon : undefined}
    endIcon={iconPosition === 'end' ? icon : undefined}
    sx={style}
  >
    {children}
  </Button>
)

export default CustomButton
