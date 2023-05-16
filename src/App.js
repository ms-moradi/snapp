import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
