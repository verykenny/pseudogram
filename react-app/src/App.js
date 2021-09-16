import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navbar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import ImageFeed from './components/ImageFeed';
import Profile from './components/Profile/Profile';
import ImageUploadModal from './components/ImageUploadModals/ImageUploadForm';
import { authenticate } from './store/session';


function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path='/login' exact={true}>
                    <LoginForm />
                </Route>
                <Route path='/sign-up' exact={true}>
                    <SignUpForm />
                </Route>
                <ProtectedRoute path='/users/:userId' exact={true} >
                    <Profile />
                </ProtectedRoute>
                <ProtectedRoute path='/home' exact={true} >
                    <ImageFeed />
                </ProtectedRoute>
                <ProtectedRoute path='/' exact={true} >
                    <ImageFeed />
                </ProtectedRoute>
                <Route path='/image-upload'>
                    <ImageUploadModal />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
