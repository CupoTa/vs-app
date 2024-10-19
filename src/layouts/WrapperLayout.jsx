import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useBackButton } from '../hooks/useBackButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, selectUser } from '../store/slices/userSlice';


import WebApp from '@twa-dev/sdk';
import Loader from '../components/Loader/Loader';
import BrowserQR from '../components/BrowserQR/BrowserQR';

const WrapperLayout = () => {

  const location = useLocation()

  const user = useSelector(selectUser)
  const dispatch = useDispatch()


  if (WebApp.platform === "unknown")
    return <BrowserQR />

  useBackButton(location.pathname)

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  if (user.loading == "pending") return <Loader />

  return (
    <div className='container'>
      <Outlet />
    </div>

  );
};

export default WrapperLayout;