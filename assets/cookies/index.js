let acceptDecline = localStorage.getItem("cookie") ? JSON.parse(localStorage.getItem("cookie")) : "";
const cookiesBanner = document.getElementById("cookies-banner");

// localStorage.clear()

function setCookie(){
  acceptDecline = true;
  localStorage.setItem("cookie", JSON.stringify(acceptDecline));
  cookiesBanner.style.display = "none";
}

if(acceptDecline){
  cookiesBanner.style.display = "none";
}

document.getElementById("allow").onclick = function () {
  setCookie();
};

document.getElementById("decline").onclick = function () {
  setCookie();
};