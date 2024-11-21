import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

const CustomMenuIcon: React.FC = () => {
  const transforms = [
    'translateX(-2px)',
    'translateX(-4px)',
    'translateX(-6px)'
  ]

  return (
    <Stack spacing={0.3} marginLeft="7px">
      {transforms.map((transform, index) => (
        <Box
          key={index}
          sx={{
            width: 15,
            height: 2,
            bgcolor: 'white',
            transform
          }}
        />
      ))}
    </Stack>
  )
}

export default CustomMenuIcon
