import { SxProps, Theme } from '@mui/material/styles'

const TasksStyles: Record<string, SxProps<Theme>> = {
    box: {
        mt: 4,
        bgcolor: 'grey',
        borderRadius: 5,
        p: 3
    },
    tab: {
        '&.MuiTab-root': {
            color: 'white',
            opacity: 0.5
        },
        '&.Mui-selected': {
            opacity: 1
        }
    },
    list: {
        width: '80%'
    },
    item: {
        border: 1,
        borderRadius: '1% 10px',
        borderColor: 'white',
        my: '20px'
    },
    text: {
        color: 'white',
        overflow: 'hidden'
    }
}

export default TasksStyles