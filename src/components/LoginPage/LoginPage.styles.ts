import { SxProps, Theme } from '@mui/material/styles';

const loginPageStyles: Record<string, SxProps<Theme>> = {
    header: {
        color: 'white',
        opacity: 0.8
    },
    boxField: {
        mt: 1,
        width: '100%'
    },
    textField: {
        '.MuiInputLabel-root': {
            color: 'white',
            opacity: 0.8
        },
        '.MuiInputBase-root': {
            color: 'white', // Цвет текста в поле ввода
        },
        '.MuiOutlinedInput-root': {
            'fieldset': {
                borderColor: 'white', // Цвет рамки
            },
            ':hover fieldset': {
                borderColor: 'white', // Цвет рамки при наведении
            },
            '.Mui-focused fieldset': {
                borderColor: 'white', // Цвет рамки при фокусе
            },
        },
        '.MuiInputLabel-root.Mui-focused': {
            color: 'white', // Цвет текста лейбла при фокусе
        },
    },
};

export default loginPageStyles;