export function apiUrl() {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        return 'http://localhost:8002'
    } else {
        return 'https://' + window.location.hostname
    }
}

export function imgDir() {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        return 'http://localhost:8002/wp/wp-content/themes/6k/6k/public/images'
    } else {
        return 'https://' + window.location.hostname + '/wp2023/wp-content/themes/6k/6k/public/images'
    }
}