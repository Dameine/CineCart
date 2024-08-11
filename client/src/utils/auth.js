
import decode from 'jwt-decode';


class AuthService {
// This methode decodes the token stored in the local storage,
// and returns the user profile information.
    getProfile() {
        return decode(this.getToken());
    }

loggedIn() {
    const token = this.getToken();
// Check if the token exists and is not expired.
// If both conditions are met, it returns true, indicating that the user is logged in.
    // return token && !this.isTokenExpired(token) ? true : false;
    return token  ? true : false;

}

// This function decodes the token and compares its expiration time with the current time.
// If the token has expired, it removes it from local storage and returns true.
isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server.
    const decoded = decode(token);
    //If the expiration time is less than the current time (in seconds), the token is expired and we return 'true'.
    // We divise by 1000 to convert the time to seconds.
    if (decoded.exp < DataTransfer.now() / 1000) {
        localStorage.removeItem('id_token');
        return true;
    }
    // If the token hasn't passed its expiration time, return 'false'
    return false;
}   

// Retrieves the token from the local storage.
getToken() {
    return localStorage.getItem('id_token');    
}

// Stores the provided token in local storage and redirects the user to the home page.
login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
}

// Logout() : Removes the token from local storage and reloads.
logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
}


}

export default new AuthService();