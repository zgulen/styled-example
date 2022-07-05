import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStlyes } from "./components/styles/Global";


const theme = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#8a1c4a"
  },
  responsive: "768px"
}
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStlyes />
      <Header />
    </ThemeProvider>
  )



};

export default App;
