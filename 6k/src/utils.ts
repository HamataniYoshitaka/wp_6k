export function apiUrl() {
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
        return 'http://localhost:8002'
    } else {
        return 'https://rokkei.co.jp'
    }
}