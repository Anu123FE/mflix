import './App.css';
import MainView from './components/main-view/main-view';
import Register from './components/register-view/register';
import Login from './components/login-view/login';
import { BrowserRouter, Route } from 'react-router-dom';
import ProfileView from './components/profile-view/profile-view';
import EditProfileView from './components/edit-profile-view/edit-profile-view';
import GenreView from './components/genre-view/genre-view';
import DirectorView from './components/director-view/director-view';




function App() {
  return (
    <BrowserRouter>
     <Route exact={true} path="/">
       <Login></Login>
     </Route>
     <Route exact={true} path="/register">
       <Register></Register>
     </Route>
     <Route exact={true} path="/movies">
       <MainView></MainView>
     </Route>
     <Route exact={true} path="/view-profile">
     <ProfileView></ProfileView>
     </Route>
     <Route exact={true} path="/genre/:genre">
     <GenreView></GenreView>
     </Route>
     <Route exact={true} path="/director/:director">
     <DirectorView></DirectorView>
     </Route>
     <Route exact={true} path="/edit-profile">
   <EditProfileView></EditProfileView>
     </Route>
    </BrowserRouter>
   
    
       );
}

export default App;
