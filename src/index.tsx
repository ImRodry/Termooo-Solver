import React from "react"
import ReactDOM from "react-dom"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import App from "./App"
import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"
import { doesPreferDark } from "./util"

const theme = createTheme({
	palette: {
		primary: {
			main: "#21DE3D"
		},
		secondary: {
			main: "#6e5c62"
		},
		error: {
			main: red.A400
		},
		mode: doesPreferDark() ? "dark" : "light"
	}
})


ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</ThemeProvider>,
	document.querySelector("#root"),
)
