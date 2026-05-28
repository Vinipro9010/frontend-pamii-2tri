const BASE_URL = 'http://localhost:3000';

export async function login(usuario, senha) {
    const res = await fetch(`${BASE_URL}/usuario/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, senha }),
    });
    if (!res.ok) {
        const err = await res.text();
        throw new Error(err);
    }
    return res.json();
}

export function getToken() {
    return localStorage.getItem('access_token');
}

export function setToken(token) {
    localStorage.setItem('access_token', token);
}

export function clearToken() {
    localStorage.removeItem('access_token');
}
