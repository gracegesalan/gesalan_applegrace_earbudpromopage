// (() => {
//   const model = document.querySelector("#model");
//   const hotspots = document.querySelectorAll(".Hotspot");

//   function modelLoaded() {
//     hotspots.forEach(hotspot => {
//         hotspot.style.display = "block";
//     });
//   }

//   function showInfo() {
//     let selected = document.querySelector(`#${this.slot}`);
//     gsap.to(selected, 1, { autoAlpha: 1 });

//   }

//   function hideInfo() {
//     let selected = document.querySelector(`#${this.slot}`);
//     gsap.to(selected, 1, { autoAlpha: 0 });
//   }

//   model.addEventListener("load", modelLoaded);

//   hotspots.forEach(function (hotspot){
//     hotspot.addEventListener("mouseover", showInfo);
//     hotspot.addEventListener("mouseout", hideInfo);
//   });

//   })();
  

(() => {

  let tl = gsap.timeline();
  tl.staggerFrom(".earbud", 5, {autoAlpha:0, scale:5, ease:"elastic.out(1, 0.3)"}, .2);

})();