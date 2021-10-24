const sciLink = {
  github: "valmir1227",
  youtube: "channel/UCDC2err--UsBR2oT1DRhQQQ",
  facebook: "valmir.almeida.5454",
  instagram: "valmir_almeida__",
  twitter: "cr_valmir",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${sciLink[social]}`;
  }
}

changeSocialMediaLinks();

//------ Github profile info -------
function getGitHubInfos() {
  const url = `https://api.github.com/users/${sciLink.github}`;

  /*pega dados da api*/
  fetch(url)
    /*Promisse*/
    .then((response) => {
      response.json().then((data) => {
        userName.textContent = data.name;
        userBio.textContent = data.bio;
        userGitLink.href = data.html_url;
        userImage.src = data.avatar_url;
        userLogin.textContent = data.login;
      });
    });
}

getGitHubInfos();

//------ Regressive counter ------
function countdown() {
  const eventDay = "December 1 2021 08:00:00 GMT-0300";

  const newDate = new Date(eventDay);
  const currentDate = new Date();

  const totalSeconds = (newDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  if ((days, hours, mins, seconds < 0)) {
    daysEl.innerHTML = "00";
    hoursEl.innerHTML = "00";
    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";
  } else {
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 500);

//-------Loader------
function loader() {
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    const content = document.querySelector(".content");
    loader.className += " hidden";
    content.className += " visible";
  });
}

loader();
setTimeout(loader, 1500);