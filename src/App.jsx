import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamingPage from './pages/GamingPage';
import QuestsPage from './pages/QuestsPage';
import MagicBoxPage from './pages/MagicBoxPage';
import ProfilePage from './pages/ProfilePage';
import MatrixPage from './pages/MatrixPage';
import FriendsPage from './pages/FriendsPage';
import MainLayout from './layouts/MainLayout';
import GamingLayout from './layouts/GamingLayout';
import WrapperLayout from './layouts/WrapperLayout';
import TapGamePage from './pages/TapGamePage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<WrapperLayout />} >
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/tap-game" element={<TapGamePage/>}/>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="quests" element={<QuestsPage />} />
        <Route path="magic-box" element={<MagicBoxPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="matrix" element={<MatrixPage />} />
        <Route path="friends" element={<FriendsPage />} />
      </Route>
      <Route path="gaming" element={<GamingLayout />}>
        <Route index element={<GamingPage />} />
      </Route>
    </Route>
  ), { basename: import.meta.env.BASE_URL }
)

function App({ routes }) {

  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  );
}

export default App;
