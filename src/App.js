import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStlyes } from "./components/styles/Global";
import Main from "./components/Main";
import data from "./data"
import Container from "./components/styles/Container.styled";
import Footer from "./components/Footer";


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
      <Container>
        {data.map((item, index) => {
          return <Main {...item} key={index} />;
        })}
      </Container>
      <Footer></Footer>
    </ThemeProvider>
  )



};

export default App;
