const images = 4;
const imageChangeDelay = 5000;
var currentImg = 0;
const homePage = Boolean(document.getElementById("imgCarousel"));

function changeImage(img) {
    currentImg = img;
    if (!homePage) {
        return;
    }
    if (currentImg > images) {
        currentImg = 0;
    }
    if (currentImg < 0) {
        currentImg = 0;
    }
    let bgImg = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./img/carousel/${img}.png")`;
    document.getElementById("imgCarousel").style.backgroundImage = bgImg;
    for (let i = 0; i < images; i++) {
        if (i != img) {
            document.getElementById(`imgCarouselButton${i}`).style.backgroundColor = "rgba(175, 175, 175, 0.85)";
        }
        else {
            document.getElementById(`imgCarouselButton${i}`).style.backgroundColor = "rgba(255, 255, 255, 0.85)";
        }
    }
}

document.getElementById("current_page_underline").setAttribute("style", "color: black;");

if (homePage) {
    btnParent = document.getElementById("imgCarouselButtons");
    for (let i = 0; i < images; i++) {
        let btn = document.createElement("div");
        btn.setAttribute("id", `imgCarouselButton${i}`);
        btn.setAttribute("class", "imgCarouselButton");
        btn.setAttribute("onclick", `changeImage(${i})`);
        btnParent.appendChild(btn);
    }
    changeImage(currentImg);
    setInterval(() => {
        currentImg++;
        if (currentImg > images - 1) {
            currentImg = 0;
        }
        changeImage(currentImg);
    }, imageChangeDelay);
}