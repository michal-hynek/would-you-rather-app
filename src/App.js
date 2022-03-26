import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LeaderBoard from './components/LeaderBoard';
import NewQuestion from './components/NewQuestion';
import SignInContainer from './components/SignInContainer';
import PrivateRoutes from './components/utils/PrivateRoutes';
import PageNotFound from './components/PageNotFound';
import { handleInitialData } from './actions/shared';
import ViewPoll from './components/ViewPoll';

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
                    <Route path="/" element={<PrivateRoutes currentUser={currentUser} />}>
                        <Route path="/" element={<Home />} />
                        <Route path="questions/new" element={<NewQuestion />} />
                        <Route path="questions/:id" element={<ViewPoll />} />
                        <Route path="leader-board" element={<LeaderBoard />} />
                    </Route>
                    <Route path="/login" element={<SignInContainer />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default connect(mapStateToProps)(App);
