import React, {Suspense, useContext} from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import './styles/index.scss'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {HomePageAsync} from './pages/HomePage/HomePage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';


export const App = ()=> {

  const {theme, ToggleTheme} =  useTheme()
    return (
      <div className={classNames('app', {}, [theme])}>
        <button onClick={ToggleTheme}>Toggle</button>
        <Link to={'/'}>HomePage</Link>
        <Link to={'/about'}>AboutPage</Link>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
          <Route path={'/'} element={<HomePageAsync />}/>
        </Routes>
        </Suspense>
      </div>
    );
}
