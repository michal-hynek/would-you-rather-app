import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LeaderBoard from './components/LeaderBoard';
import NewQuestion from './components/NewQuestion';
import SignInContainer from './components/SignInContainer';
import PrivateRoute from './components/utils/PrivateRoute';
import { handleInitialData } from './actions/shared';

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
    };
};

const App = ({ currentUser, dispatch }) => {

    useEffect(() => {
        dispatch(handleInitialData());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute currentUser={currentUser}>
                                <Home />
                            </PrivateRoute>
                        } />
                    <Route
                        path="/questions/new"
                        element={
                            <PrivateRoute currentUser={currentUser}>
                                <NewQuestion />
                            </PrivateRoute>
                        } />
                    <Route
                        path="/leader-board"
                        element={
                            <PrivateRoute currentUser={currentUser}>
                                <LeaderBoard />
                            </PrivateRoute>
                        } />
                    <Route path="/login" element={<SignInContainer />} />
                    <Route path="/*" element={<p>Page not found</p>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default connect(mapStateToProps)(App);
