import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

const CustomMenuIcon: React.FC = () => {
  return (
    <Stack spacing={0.3} marginLeft="10px">
      <Box
        sx={{
          width: 15,
          height: 2,
          bgcolor: 'white',
          transform: 'translateX(-2px)'
        }}
      />
      <Box
        sx={{
          width: 15,
          height: 2,
          bgcolor: 'white',
          transform: 'translateX(-4px)'
        }}
      />
      <Box
        sx={{
          width: 15,
          height: 2,
          bgcolor: 'white',
          transform: 'translateX(-6px)'
        }}
      />
    </Stack>
  )
}

export default CustomMenuIcon
