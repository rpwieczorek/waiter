import { Routes, Route } from "react-router-dom";
import Tables from "./components/pages/Tables/Tables";
import Table from "./components/pages/Table/Table";
import NotFound from "./components/pages/NotFound/NotFound";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Tables />} />

            <Route path="/table/:Id" element={<Table />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Container>
    </div>
  );
}

export default App;
