const cookiesBanner = () => {
    let cookies = sessionStorage.getItem('user')
    console.log(cookies)
    if (cookies != 'cookiesAccepted') {
        document.getElementById("bandeau-cookies").style.display= "inline"
    } else {
        sessionStorage.setItem('user', 'cookiesAccepted');
    }
}

cookiesBanner();

const infoRemove = () => {
    sessionStorage.setItem('user', 'cookiesAccepted');
    document.getElementById("bandeau-cookies").style.display = "none"
}

