import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LeaderBoard from './components/LeaderBoard';
import NavBar from './components/NavBar';
import NewQuestion from './components/NewQuestion';
import SignIn from './components/SignIn';
import { handleInitialData } from './actions/shared';

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
    };
};

const App = (props) => {

    useEffect(() => {
        props.dispatch(handleInitialData());
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                {props.currentUser ?
                    <Fragment>
                        <header className="App-header">
                            <NavBar />
                        </header>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/questions/new" element={<NewQuestion />} />
                            <Route path="/leader-board" element={<LeaderBoard />} />
                        </Routes>
                    </Fragment>
                    : <SignIn />
                }
            </div>
        </BrowserRouter>
    );
}

export default connect(mapStateToProps)(App);
