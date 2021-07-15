import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {LoginPage} from "../pages/LoginPage/LoginPage"
import {SignupPage} from "../pages/SignupPage/SignupPage"
import {HomePage} from "../pages/HomePage/HomePage"
import {AddMusicPage} from "../pages/AddMusicPage/AddMusicPage"
import {ErrorPage} from "../pages/ErrorPage/ErrorPage"
import {ProfilePage} from "../pages/ProfilePage/ProfilePage"
import { Albums } from '../pages/Albums';

export const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage/> 
        </Route>
        <Route exact path="/cadastro">
          <SignupPage/> 
        </Route>
        <Route exact path="/">
          <HomePage/> 
        </Route>
        <Route exact path="/perfil/:id">
          <ProfilePage/> 
        </Route>
        <Route exact path="/albums">
          <Albums/> 
        </Route>
        <Route exact path="/adicionar-música">
          <AddMusicPage/> 
        </Route>
        <Route>
          <ErrorPage/> 
        </Route>
      </Switch>
    </BrowserRouter>
  )
}