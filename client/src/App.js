import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Favs } from './views/Favs';
import { AddJoke } from './views/AddJoke';
import { FilterJoke } from './views/FilterJoke';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/jokes' replace/>}/>
        <Route path='/jokes' element={<Home/>}/>
        <Route path='/jokes/add/joke' element={<AddJoke/>}/>
        <Route path='/jokes/favs' element={<Favs/>}/>
        <Route path='jokes/filter' element={<FilterJoke/>}/>
      </Routes>
    </>
  );
}

export default App;
