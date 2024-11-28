import { SxProps, Theme } from '@mui/material/styles'

const TasksStyles: Record<string, SxProps<Theme>> = {
    box: {
        mt: 4,
        bgcolor: 'grey',
        borderRadius: 5,
        p: 3,
        maxHeight: '73vh'
    },
    tab: {
        '&.MuiTab-root': {
            flexDirection: 'row',
            color: 'white',
            opacity: 0.5
        },
        '&.Mui-selected': {
            opacity: 1
        }
    },
    list: {
        width: '80%',
        mt: '30px',
        p: 0,
        overflowY: 'auto'
    },
    item: {
        border: 1,
        borderRadius: '1% 10px',
        borderColor: 'white',
        my: '20px',
        '&:first-of-type': {
            marginTop: 0,
        },
        '&:last-of-type': {
            marginBottom: 0,
        }
    },
    text: {
        color: 'white',
        overflow: 'hidden'
    }
}

export default TasksStyles