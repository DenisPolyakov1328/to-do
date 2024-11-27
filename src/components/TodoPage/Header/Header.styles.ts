import { SxProps, Theme } from '@mui/material/styles';

const headerStyles: Record<string, SxProps<Theme>> = {
    container: {
        mt: 3,
        bgcolor: 'grey',
        borderRadius: 5,
        p: 3,
    },
    button: {
        padding: '8px 50px',
    },
    textField: {
        '.MuiInputLabel-root': {
            color: 'white',
            opacity: 0.8
        },
        '.MuiInputLabel-root.Mui-focused': {
            color: 'white',
        },
        '.MuiInputBase-root': {
            color: 'white',
        },
        '.MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
    },
};

export default headerStyles;