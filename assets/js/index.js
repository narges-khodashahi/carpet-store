//loader
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const loader = document.querySelector("#loader");

        loader.classList.add("hidden");
        document.body.classList.add("visible");
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    function checkScroll() {
        if (window.scrollY > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
    checkScroll();
    window.addEventListener("scroll", checkScroll);
});


// question Toggle
function toggleQuestion(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('span');

    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        icon.textContent = '+';
    } else {
        document.querySelectorAll('.answer').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.question-btn span').forEach(span => {
            span.textContent = '+';
        });

        answer.classList.add('active');
        icon.textContent = '-';
    }
}

//scroll
function scrollCat(direction) {
    const category = document.getElementById('categoryBox');
    const scrollAmount = 200; // مقدار اسکرول (پیکسل)

    if (direction === 'left') {
        category.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        category.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

function scrollProducts(direction) {
    const productBox = document.getElementById('products');
    const scrollAmount = 200; // مقدار اسکرول (پیکسل)
    if (direction === 'left') {
        productBox.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        productBox.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

function scrollDecor(direction) {
    const decorBox = document.getElementById('decoration');
    const scrollAmount = 200; // مقدار اسکرول (پیکسل)
    if (direction === 'left') {
        decorBox.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        decorBox.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

function scrollComment(direction) {
    const commentBox = document.getElementById('comment');
    const scrollAmount = 200; // مقدار اسکرول (پیکسل)

    if (direction === 'left') {
        commentBox.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        commentBox.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

function scrollBlog(direction) {
    const blogBox = document.getElementById('blogs');
    const scrollAmount = 200; // مقدار اسکرول (پیکسل)
    if (direction === 'left') {
        blogBox.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        blogBox.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}
