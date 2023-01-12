import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { ThemeProvider, CssBaseline } from "@mui/material"
import { customTheme } from "./themes/customTheme"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
)
