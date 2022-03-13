export const LOGIN = 'LOGIN';

export const login = (userId) => {
    return {
        type: LOGIN,
        userId,
    };
}