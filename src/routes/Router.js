import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {LoginPage} from "../pages/LoginPage/LoginPage"
import {SignupPage} from "../pages/SignupPage/SignupPage"
import {HomePage} from "../pages/HomePage/HomePage"
import {AddMusicPage} from "../pages/AddMusicPage/AddMusicPage"
import {MusicDetailsPage} from "../pages/MusicDetailPage/MusicDetailPage"
import {ErrorPage} from "../pages/ErrorPage/ErrorPage"

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
        <Route exact path="/adicionar-música">
          <AddMusicPage/> 
        </Route>
        <Route exact path="/detalhe/:id">
          <MusicDetailsPage/> 
        </Route>
        <Route>
          <ErrorPage/> 
        </Route>
      </Switch>
    </BrowserRouter>
  )
}