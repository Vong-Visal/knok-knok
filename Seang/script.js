const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const images = [
    "seang1.jpg",
    "seang2.jpg",
    "seang3.jpg",
    "seang4.jpg",
    "seang5.jpg",
    "seang6.jpg",
    "seang8.jpg",
    "seang9.jpg",
    "seang10.jpg",
    "seang7.png",
];

let currentImageIndex = 0;
const container = document.getElementById('image-container');

// Added a check to ensure container exists before appending images
if (container) {
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style.width = '200px'; // Set your desired width
        img.style.height = '200px'; // Set your desired height
        container.appendChild(img);
    });
}



yesBtn.addEventListener("click", () => {
    question.innerHTML = "Is You 😘";
    gif.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
});

// Added noBtn positioning fix
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = 'absolute'; // Set position to absolute to allow movement
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
