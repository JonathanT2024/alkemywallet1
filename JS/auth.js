let logged = sessionStorage.getItem('auth');

if(!logged) {
    location.href="../HTML/login.html";
}