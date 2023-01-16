window.onblur = function() {
    document.title = "Please come back! - esmél.xyz"
}

window.onfocus = function() {
    document.title = "Esmél"
}

window.onload = function () {
    if (getCookie("alert-preference") === "true") {
    } else {
        alert('Welcome to the reimagined esmel.xyz. In this version, mobile optimisation will be paramount. In addition, I have implemented new security features described in greater detail in the next message.');
        alert('I take the security and protection of my visitors data very seriously. To accomplish this, I have implemented a number of security measures to ensure that your visit is secure at all times. Some of these measures include:\n\n• SSL/TLS encryption\n\n• HSTS encryption\n\n• Regular security updates\n\nNo system is invulnerable to cyber attacks, however, I do my best to mitigate against it. I encourage you to take precautions to protect your personal information such as using a VPN or proxy.');
        // alert('I value your online privacy, that\'s why I am in the process of eliminating every instance that can track you throughout the web on my website. Yikes! A privacy policy will be implemented soon regarding your data use on my website(s)')
        setCookie("alert-preference", "true", 7);
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
