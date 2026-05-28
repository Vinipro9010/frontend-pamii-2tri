import { clearToken } from './api.js';

export function logout() {
    clearToken();
    const login_url = document.querySelector('ion-router')?.useHash ?? true;
    window.location.href = login_url == true ? '#/login' : '/login';
}