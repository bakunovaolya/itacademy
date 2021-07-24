document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("org-detailed").onclick = function showIt() {
    document.getElementById("text-visible-org").style.display = "block";
    document.getElementById("org-detailed").style.display = "none";
  };
  document.getElementById("coord-detailed").onclick = function showIt() {
    document.getElementById("text-visible-coord").style.display = "block";
    document.getElementById("coord-detailed").style.display = "none";
  };
  document.getElementById("part-detailed").onclick = function showIt() {
    document.getElementById("text-visible-part").style.display = "block";
    document.getElementById("part-detailed").style.display = "none";
  };
  document.getElementById("two-detailed").onclick = function showIt() {
    document.getElementById("text-visible-two").style.display = "block";
    document.getElementById("two-detailed").style.display = "none";
  };
  document.getElementById("holiday-detailed").onclick = function showIt() {
    document.getElementById("text-visible-holiday").style.display = "block";
    document.getElementById("holiday-detailed").style.display = "none";
  };
  document.getElementById("biz-detailed").onclick = function showIt() {
    document.getElementById("text-visible-biz").style.display = "block";
    document.getElementById("biz-detailed").style.display = "none";
  };

  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };

  let list = document.getElementsByClassName("consultation");
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function (e) {
      modal.style.display = "block";
    });
  }
  const images = document.querySelectorAll('.otzyvy-content .otzyv-slide div.block-otzyv');
  const sliderLine = document.querySelector('.otzyvy-content .otzyv-slide');
  let count = 0;
  let width;

  function init() {
    console.log('resize');
    width = document.querySelector('.otzyv-block').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
    });
    moveSlider();
  }

  document.querySelector('.next-button').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
      count = 0;
    }
    moveSlider();
  });

  document.querySelector('.prev-button').addEventListener('click', function () {
    count--;
    if (count < 0) {
      count = images.length - 1;
    }
    moveSlider();
  });

  function moveSlider() {
    console.log('move');
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

  }


  init();
  window.addEventListener('resize', init);
});
