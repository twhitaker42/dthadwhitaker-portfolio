import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import routes from './data/Routes';



function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navigation />
        <main className="main-content">
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>  
        <Footer />
      </div>
    </Router>
  );
}

export default App;