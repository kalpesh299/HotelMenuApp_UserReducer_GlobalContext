
import './App.css';
import {BrowserRouter,Routes,Route}from "react-router-dom"
import { Header } from './components/Header';
import { MealProvider } from './context/MealCOntext';
import { Categories } from './components/Categories';

function App() {
  return (
    <div className="App">
<MealProvider>
  <BrowserRouter>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Categories/>}/>
    </Routes>
    
    </BrowserRouter>
    </MealProvider> 
    
    </div>
  );
}

export default App;
