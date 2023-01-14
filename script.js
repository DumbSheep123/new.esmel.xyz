window.onblur = function() {
    document.title = "Please come back! - esmel.xyz"
}

window.onfocus = function() {
    document.title = "Esmél"
}

function cancel() {
    document.getElementById("privacy").style.display = "none";
    document.getElementById("maincontent").style.display = "block";
    window.open('', '_blank');
  }
  
  function accept() {
    document.getElementById("privacy").style.display = "none";
    document.getElementById("maincontent").style.display = "block";
  }