import axios from "axios";

const $host = axios.create({
    baseURL: "http://localhost:5000"
})

const $authHost = axios.create({
    baseURL: "http://localhost:5000"
});

// Progressbar init with auth host?
// loadProgressBar('', $authHost);

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('jwtToken')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}