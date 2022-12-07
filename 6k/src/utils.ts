export function apiUrl() {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        return 'http://localhost:8002'
    } else {
        return 'https://rokkei.co.jp'
    }
}