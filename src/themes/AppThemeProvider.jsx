import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, pink } from '@mui/material/colors';
import React from 'react';

const theme = createTheme({
    typography: {
        allVariants: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 500,
        },
    },
    palette: {
        primary: {
        main: grey[700],
        },
        secondary: {
        main: pink[500],
        },
    },
    components: {
        MuiTabs: {
        styleOverrides: {
            indicator : {
            backgroundColor: 'transparent',
            },
        },
        },
        MuiTab: {
        styleOverrides: {
            root: {
            backgroundColor: '#eee',
            borderRadius: 10,
            marginRight: '35px',
            marginTop: '2px',
            minHeight : '15px',
            minWidth : '1px',
            height : '30px',
            ':active': {
                backgroundColor : 'black',
                color: 'white',
            },
            ':focus': {
                backgroundColor: 'black',
                color: 'white',
            },
            ':selected': {
                backgroundColor: 'black',
                color: 'white',
            },
            },
            indicator: {
            backgroundColor: 'transparent',
            },
        },
        },
    },
});

const AppThemeProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppThemeProvider;