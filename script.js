"use strict";
const githubBtn = document.getElementById("githubBtn");
const frontendMentorBtn = document.getElementById("frontendmentorBtn");
const linkedinBtn = document.getElementById("linkedInBtn");
const twitterBtn = document.getElementById("twitterBtn");

function clickBtn(site) {
  window.open(site, "_blank");
}

githubBtn.addEventListener("click", function () {
  clickBtn("https://github.com/dunt21");
});

frontendMentorBtn.addEventListener("click", function () {
  clickBtn("https://www.frontendmentor.io/profile/dunt21");
});

linkedinBtn.addEventListener("click", function () {
  clickBtn(
    "https://www.linkedin.com/in/suad-macaulay-429070278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  );
});

twitterBtn.addEventListener("click", function () {
  clickBtn("https://x.com/moreofababe");
});
