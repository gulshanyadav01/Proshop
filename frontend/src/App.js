import { Container } from 'react-bootstrap'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/ CartScreen";


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path = "/product/:id" component={ProductScreen}/>
          <Route path = "/cart/:id?" component = {CartScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
