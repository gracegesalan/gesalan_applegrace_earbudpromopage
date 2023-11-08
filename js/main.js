(() => {
  
  // xray
  let imagecon = document.querySelector('#imagecon');
  let drag = document.querySelector('.dragimage');
  let left = document.querySelector('.leftimage');
  let dragging = false;
  let min = 0;
  let max = imagecon.offsetWidth;
  // xray ^
  
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  
//  xray 
  function onDown() {
    dragging = true;
    console.log("set to true")
  }

  function onUp() {
    dragging = false;
    console.log("set to false")
  }

  function onMove(event) {
    if (dragging === true) {
      let x = event.clientX - imagecon.getBoundingClientRect().left;
      console.log(x);

      if(x < min) {
        x = min;
      } else if (x > max) {
        x = max - 10;
      }

      drag.style.left = x + "px";
      left.style.width = x + "px";
    }
  }
  // xray ^

  function modelLoaded() {
    hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
    });
  }

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });

  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  // xray
  drag.addEventListener('mousedown', onDown);
  document.body.addEventListener('mouseup', onUp);
  document.body.addEventListener('mousemove', onMove);
  // xray ^

  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot){
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });

  })();
  

// (() => {

//   let tl = gsap.timeline();
//   tl.staggerFrom(".earbud", 5, {autoAlpha:0, scale:5, ease:"elastic.out(1, 0.3)"}, .2);

// })();