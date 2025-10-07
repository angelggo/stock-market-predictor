import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary:{
            main: '#189b34ff'
        },
        secondary:{
            main: '#276214ff'
        },
        error:{
            main: red.A400
        }
    }
});