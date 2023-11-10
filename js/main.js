(() => {

  let button = document.querySelector("#button");
  let burgerCon = document.querySelector("#burger-con");


  // scroll
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 430; 

    const image = [];
    const buds = {
      frame: 0
    };

    for (let i=0; i<frameCount; i++) {
      const img = document.createElement("img");
      img.src = `images/earbuds_${(i+1).toString().padStart(4, '0')}.jpg`;
      image.push(img);
    }
  // scroll ^


  // scroll
    gsap.to(buds, {
      frame: 429,
      snap: "frame",
      scrollTrigger: {
        trigger: "#explode-view",
        pin: true,
        scrub: 1,
        start: "top top",
        markers: true,
      },
      onUpdate: render
    });

    image[0].addEventListener("onload", render());
    
    function render () {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image[buds.frame],0, 0);
    }
  // scroll^
  
  // xray
  let imagecon = document.querySelector('#imagecon');
  let drag = document.querySelector('.dragimage');
  let left = document.querySelector('.leftimage');
  let dragging = false;
  let min = 0;
  let max = imagecon.offsetWidth;
  // xray ^
  
  // hotspot
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  const infoBoxes = [
    {
      title: 'Speaker',
      text: 'The speaker delivers crystal-clear sound with immersive depth, ensuring every note and voice is heard in stunning clarity.',
      image: 'images/hotspot_xray.jpg'
    },
    {
      title: 'Earpiece',
      text: 'The earpiece provides a comfortable and secure fit, offering ultra-soft silicone tip for superior noise isolation and all-day comfort.',
      image: 'images/hotspot_xray.jpg'
    },
    {
      title: 'Saba Brand',
      text: 'Saba is a symbol of innovation, quality, and style. This is where cutting-edge technology meets timeless design, redefining your audio experience.',
      image: 'images/hotspot_xray.jpg'
    },
    {
      title: 'Front',
      text: 'The front section of the Saba earbuds showcases a sleek, modern design, setting the tone for a harmonious blend of form and function, where aesthetics meet functionality.',
      image: 'images/hotspot_xray.jpg'
    },
    {
      title: 'Back',
      text: 'The back portion of Saba earbuds is designed with elegance and practicality in mind, ensuring a comfortable and stylish fit',
      image: 'images/hotspot_xray.jpg'
    },
  ]
  // hotspot^

  function hambergerMenu() {
    burgerCon.classList.toggle("slide-toggle");
    button.classList.toggle("expanded");
  }
  
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

  function loadInfo() {
    infoBoxes.forEach((infoBoxes, index) => {
    let selected = document.querySelector (`#hotspot-${index+1}`);

    const titleElement = document.createElement('h2');
    titleElement.textContent = infoBoxes.title;

    const textElement = document.createElement('p');
    textContent = infoBoxes.text;

    const imgElement = document.createElement('img');
    imgElement.src = infoBoxes.image;

    selected.appendChild(imgElement);
    selected.appendChild(titleElement);
    selected.appendChild(textElement);
    });
  }

  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });

  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  button.addEventListener("click", hambergerMenu, false);

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