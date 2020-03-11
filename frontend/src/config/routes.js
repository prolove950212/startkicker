import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing/Landing'
import Signup from '../components/Signup/Signup';
import Login from '../components/Login/Login';
import Payment from '../components/Payment/Payment';
import Project from '../components/Project/Project'
import ProjectForm from '../components/Project/ProjectForm/ProjectForm';
import EditProject from '../components/EditProject/EditProject';
import LoggedInRequired from '../components/Wrapper/checkIfUserIsLoggedIn';

export default ({ isLogin, curUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/signup' render={() => (<Signup isLogin={isLogin} curUser={curUser} setCurrentUser={setCurrentUser}/>)} />
    <Route
      path='/login' render={() => (<Login isLogin={isLogin} curUser={curUser} setCurrentUser={setCurrentUser}/>)}/>
    {/* <Route path='/payment' render={() => (<Payment isLogin={isLogin} 
      curUser={curUser} setCurrentUser={setCurrentUser}/>)}/> */}
    <Route path='/payment' component={
      LoggedInRequired(
        () => <Payment curUser={curUser} setCurrentUser={setCurrentUser}/>
      )}/>
    <Route path='/project/:projectId/edit' render={() => (<EditProject isLogin={isLogin} curUser={curUser} setCurrentUser={setCurrentUser}/>)}/>
    <Route path='/project/:projectId' render={() => (<Project isLogin={isLogin} curUser={curUser} setCurrentUser={setCurrentUser}/>)}/>
    <Route path='/create' render={() => (<ProjectForm isLogin={isLogin} curUser={curUser} setCurrentUser={setCurrentUser}/>)}/>
   
  </Switch>
);

