import React, { Fragment } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import UserScorePanel from "./UserScorePanel";

const mapStateToProps = ({ users }) => {
    const userScores = Object.values(users).map(user => {
        const answeredQuestions = Object.keys(user.answers).length;
        const createdQuestions = (user.questions || []).length;
        const score = answeredQuestions + createdQuestions;

        return {
            userId: user.id,
            username: user.name,
            avatarURL: user.avatarURL,
            answeredQuestions,
            createdQuestions,
            score,
        };
    }).sort((a, b) => (b.score - a.score));

    return { users: userScores };
};

const LeaderBoard = ({ users }) => {
    return (
        <Fragment>
            <NavBar />
            <table className="leader-board">
                <tbody>
                    {users.map((u, i) => (
                        <UserScorePanel key={u.userId} rank={i + 1} {...u} />
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default connect(mapStateToProps)(LeaderBoard);
