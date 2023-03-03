// const images = ["0.jpg", "1.jpg", "2.jpg"];

// choosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImg = document.createElement("img");
// bgImg.src = `img/${choosenImage}`;
// document.body.appendChild(bgImg);

const images = ["0.jpg", "1.jpg"];

choosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${choosenImage}')`;
document.body.style.backgroundRepeat = "repeat";
// document.body.style.backgroundPosition = "center center";
document.body.style.backgroundSize = "20%";
