import { createTheme } from "@mui/material/styles";
import IranianSans from "../assets/font/IranianSans.ttf";

const iranianSans = {
  fontFamily: 'IranianSans',
  // fontStyle: 'semi-bold',
  // fontDisplay: 'swap',
  // fontWeight: '600',
  src: `
    local('IranianSans'),
    // local('IranianSans-SemiBold'),
    url(${IranianSans}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
 };

const theme = createTheme({
    typography: {
      fontFamily: [ 'IranianSans'].join(',')
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [iranianSans],
        },
      }
    },
    components:{
      MuiPaper:{
        styleOverrides:{
          root:{
            width:'100%',
            borderRadius:'0px',
          },
        }
      },
      MuiDialog:{
        styleOverrides:{
          container:{
            position:'fixed',
            bottom:'-142px',
            right:'0px',
            left:'0px',
          },
          paper:{
            margin:'0px'
          }
        }
      },
      MuiDialogTitle:{
        styleOverrides:{
          root:{
            padding:'8px'
          }
        }
      },
      MuiTypography:{
        styleOverrides:{
          root:{
            padding:'8px',
          },
          h6:{
            padding:'8px',
          }
        }
      }
    }
})

export default theme;