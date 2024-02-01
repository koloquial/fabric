import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Splash from './views/Splash'
import Dashboard from './views/Dashboard';
import DisplayAllCards from './components/DisplayAllCards';

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PrivateRoute />}>
              <Route exact path='/' element={<Dashboard />} />
            </Route>
          <Route exact path='/splash' element={<Splash />} />
          <Route exact path='/cards' element={<DisplayAllCards />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;