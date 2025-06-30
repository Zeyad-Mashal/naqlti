document.getElementById("navbar-toggle").addEventListener("click", function () {
    document.getElementById("navbar-menu").classList.toggle("active");
});
window.addEventListener("load", () => {
    document.querySelector(".hero_content").style.opacity = "1";
    document.querySelector(".hero_image").style.opacity = "1";
    updateSlider(0);
});

const reviewList = document.querySelector(".reviews_list");
const reviewItems = document.querySelectorAll(".review_item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function getItemWidth() {
    return reviewItems[0].offsetWidth + 16; // 16 gap بين العناصر
}

function getVisibleItems() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) return 4.5;
    if (screenWidth >= 768) return 3;
    if (screenWidth >= 576) return 2;
    return 1;
}

function updateSlider(index) {
    const itemWidth = getItemWidth();
    const visibleItems = getVisibleItems();
    const maxIndex = reviewItems.length - Math.ceil(visibleItems);

    if (maxIndex <= 0) return;
    currentIndex = index;

    if (currentIndex > maxIndex) currentIndex = 0;
    if (currentIndex < 0) currentIndex = maxIndex;

    reviewList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextBtn.addEventListener("click", () => updateSlider(currentIndex + 1));
prevBtn.addEventListener("click", () => updateSlider(currentIndex - 1));

// auto move
setInterval(() => {
    updateSlider(currentIndex + 1);
}, 5000);

// أعادة ضبط عند تغيير حجم الشاشة
window.addEventListener("resize", () => {
    updateSlider(currentIndex);
});
document.querySelectorAll('.navbar_links_mobile .dropdown').forEach(drop => {
    drop.addEventListener('click', () => {
        drop.classList.toggle('open');
    });
});