window.onblur = function() {
    document.title = "Please come back! - esmel.xyz"
}

window.onfocus = function() {
    document.title = "Esm&eacute;l"
}

window.onload = function () {
    if (getCookie("alert-preference") === "true") {
    } else {
        alert('I take the security and protection of our visitors data very seriously. I understand that trust is essential in any online relationship, and I am committed to ensuring that your visit is secure.\n\nI take the security and protection of our visitors data very seriously. I understand that trust is essential in any online relationship, and I am committed to ensuring that your visit is secure.\n\nTo accomplish this, I have implemented a number of security measures to ensure that your visit is secure at all times. Some of these measures include:\n\n• SSL/TLS encryption: All data transmitted to and from my website is encrypted using SSL/TLS technology, which ensures that your visit is protected from unauthorized access.\n\n• HSTS encryption: With HSTS, your browser will automatically upgrade the connection to HTTPS, making it more difficult for a hacker to intercept the connection.\n\n• Regular security updates: I regularly update my website to ensure that I am always using the latest security features and patches where available.\n\nI understand that no system is completely invulnerable to cyber threats, but I do everything in my power to protect your visit. I encourage you to take precautions to protect your personal information as well such as using a VPN or Proxy. If you have any concerns about our security measures, please contact us at security@esmel.xyz.\n\nThank you for visitng and I assure you that we have taken all the necessary precautions to protect your connecting and visit.');
        setCookie("alert-preference", "true", 30);
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
