let currentSlide = 0;

function showDetails(image, name, position, company) {
    const speakerDetail = document.getElementById('speakerDetail');
    speakerDetail.querySelector('.speaker-image').src = image;
    speakerDetail.querySelector('.speaker-name').innerText = name;
    speakerDetail.querySelector('.speaker-position').innerText = position;
    speakerDetail.querySelector('.speaker-company').innerText = company;
    speakerDetail.style.display = 'block';
    document.getElementById('slider').style.marginTop = '250px';
}

document.getElementById('closeBtn').onclick = () => {
    document.getElementById('speakerDetail').style.display = 'none';
    document.getElementById('slider').style.marginTop = '0';
};

document.getElementById('leftBtn').onclick = () => slide(-1);
document.getElementById('rightBtn').onclick = () => slide(1);

function slide(direction) {
    const slides = document.querySelector('.slides');
    const cardWidth = slides.querySelector('.card').offsetWidth + 20; // Card width plus margin
    currentSlide = (currentSlide + direction + 4) % 4; // Assuming 4 slides for simplicity
    slides.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}
