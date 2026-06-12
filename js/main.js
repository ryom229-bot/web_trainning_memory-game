// slick
$(document).ready(function () {
  $(".slick").slick({
    arrows: true,
    fade: true,
  });
});

var granimInstance = new Granim({
  element: "#canvas-basic",
  direction: "diagonal",
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ["#FFEED6"], // 朝方
        ["#FFF4D6"], // 朝
        ["#C8E7FF"], // 昼前
        ["#A7D8FF"], // 昼
        ["#76C7F2"], // 昼後
        ["#4FA3E3"], // 昼深
        ["#FFCC99"], // 夕方明るめ
        ["#FFB07F"], // 夕方中間
        ["#FF8A70"], // 夕方オレンジ
        ["#F66E63"], // 夕方赤み
        ["#D94B8B"], // 夕方紫寄り
        ["#0F2350"], // 夜濃紺
        ["#102A5D"], // 夜青紺
        ["#10316A"], // 夜青
        ["#103977"], // 夜深青
        ["#0F4084"], // 夜明るめ紺
        ["#0E478F"], // 夜戻り青
        ["#FFEED6"], // 朝方に戻る
        ["#FFF4D6"], // 朝に戻る
      ],
      transitionSpeed: "2000",
    },
  },
});

particlesJS("particles-js", {
  particles: {
    number: { value: 400, density: { enable: true, value_area: 800 } },
    color: { value: "#fff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 10,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
