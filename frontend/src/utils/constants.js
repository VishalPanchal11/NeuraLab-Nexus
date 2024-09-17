export const HOST = import.meta.env.VITE_SERVER_URL;

export const AUTH_ROUTES = "api/auth";
export const SIGNUP_ROUTE = `http://localhost:6969/${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTE = `http://localhost:6969/${AUTH_ROUTES}/login`;
export const GET_USER_INFO = `http://localhost:6969/${AUTH_ROUTES}/user-info`;
export const UPDATE_PROFILE_ROUTE = `http://localhost:6969/${AUTH_ROUTES}/update-profile`;
