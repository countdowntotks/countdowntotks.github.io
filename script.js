const countDownDate = new Date("2020-09-26T00:00:00Z").getTime();

const timerFunction = setInterval(() => {
  const currentDate = new Date().getTime();
  const finalTime = countDownDate - currentDate;

  if (finalTime > 0) {
    const days = Math.floor(finalTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (finalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((finalTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((finalTime % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  } else {
    clearInterval(timerFunction);
    let headword = document.querySelector("#headword");
    let hold = document.querySelector(".countdown-time");
    hold.innerHTML = "";
    headword.innerHTML = "TKS IS LIVE";
    hold.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/F6ZxYGIqTG8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
}, 1000);
