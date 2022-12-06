import { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  const [menu, setMenu] = useState(1);
  const [title, setTitle] = useState("");
  console.log("Menu :", menu);

  useEffect(() => {
    if (menu === 1){
    setTitle("Home");
    } else if(menu === 2){
    setTitle("Login");
    } else if (menu === 3){
    setTitle("About")
    } else if (menu === 4){
    setTitle("Product")
    }
  }, [menu]);

  console.log(title);

  const content = () => {
    if (menu === 1) {return <Home/>}
    else if(menu === 2) {return <Login />}
    else if(menu === 3) {return <About />}
    else if(menu === 4) {return <Product />}
  }

  return (
    <div className="App">
      {title}
      <Header onClick={setMenu} />
      {content()}
      <Footer onClick={setMenu} />
    </div>
  );
}

export default App;
