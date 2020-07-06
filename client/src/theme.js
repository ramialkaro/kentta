import { createMuiTheme } from '@material-ui/core/styles'
import { deepOrange, blueGrey } from '@material-ui/core/colors'

const headerFont = 'Poppins'

const theme = createMuiTheme({
    palette: {
        primary: deepOrange,
        secondary: blueGrey
    },
    props: {
        MuiButton: {
            variant: 'contained',
            color: 'secondary',
        },
    },
    typography: {
        fontFamily: 'Open Sans',

        h1: {
            fontFamily: headerFont,
        },
        h2: {
            fontFamily: headerFont,
        },
        h3: {
            fontFamily: headerFont,
        },
        h4: {
            fontFamily: headerFont,
        },
        h5: {
            fontFamily: headerFont,
        },
        h6: {
            fontFamily: headerFont,
        },
        subtitle1: {
            fontFamily: headerFont,
        },
        subtitle2: {
            fontFamily: headerFont,
        },
        body1: {
            fontFamily: headerFont,
        },
        body2: {
            fontFamily: headerFont,
        },
        button: {
            fontFamily: headerFont,
        },
        caption: {
            fontFamily: headerFont,
        },
        overline: {
            fontFamily: headerFont,
        },
        
    },
})

export default theme