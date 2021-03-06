import './App.scss';
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from './pages/home/home';
import PublicRoute from './routes/public';
import AboutUs from './pages/about/about';
import Products from './pages/products/products';
import NavigationBar from './sections/navigation/Navigation';


function App() {
  return (
      <BrowserRouter>
        <NavigationBar />
          
        <Switch>

          <PublicRoute component={Home} path="/home" />
          <PublicRoute component={AboutUs} path="/about" />
          <PublicRoute component={Products} path="/products" />
            
          <Redirect to = "/home" />
        </Switch>
      </BrowserRouter>


  )
}

export default App;
