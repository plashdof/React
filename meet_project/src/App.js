
import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout'



function App() {
  return (<div>
    <Layout>
      <Routes>          
        <Route path='/' element={<AllMeetupsPage/>} />

        <Route path='/favorites' element={<FavoritesPage/>} />

        <Route path='/new-meet-up' element={<NewMeetupPage/>}/>
          

      </Routes>
    </Layout>
  </div>);
}

export default App;
