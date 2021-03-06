import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navbar/index.js';
import Footer from './components/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ImageFeed from './components/ImageFeed';
import Profile from './components/Profile/Profile';
import ImageUploadModal from './components/ImageUploadModals/ImageUploadForm';
import { authenticate } from './store/session';


function App() {
    const user = useSelector(state => state.session.user)
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
            {user && <NavBar />}
            <main>
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
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
