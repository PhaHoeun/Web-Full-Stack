import { ExceptionOutlined } from "@ant-design/icons";

//is empty or null
export const isEmptyOrNull = (value) => {
    if (value === '' || value === null || value === 'null' || value === undefined || value === 'undefined') {
        return true;
    }
    return false;
}

//store seesion in local storage
export const setUser = (user) => {
    localStorage.setItem('user', user);
}

export const getUser = () => {
    const user = localStorage.getItem('user');
    if (!isEmptyOrNull(user)) {
        return JSON.parse(user);
    }
    return null;
}

export const setToken = (access_token) => {
    localStorage.setItem('access_token', access_token);
}

export const getToken = () => {
    return localStorage.getItem('access_token');

}

export const setRefreshToken = (refresh_token) => {
    localStorage.setItem('refresh_token', refresh_token);
}

export const getRefreshToken = () => {
    return localStorage.getItem('refresh_token');

}

export const setIsLogin = (value) => { //1 or 0
    localStorage.setItem('is_login', value);
}

export const getIsLogin = () => {
    const isLogin = localStorage.getItem('is_login');
    if (isLogin === "1") {
        return true;
    }
    return false;

}

export const logOut = () => {
    setUser("", );
    setIsLogin("0");
    setRefreshToken("");
    setToken("");
    window.location.href = '/login';
}