const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
    burger.classList.toggle('open');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

function startSlider(container, imageClass) {
    const images = container.querySelectorAll(imageClass);
    if (images.length > 1) {
		if (!images[0].classList.contains('active')) {
            images[0].classList.add('active');
        }
        let current = 0;
        setInterval(function() {
            images[current].classList.remove('active');
            current = (current + 1) % images.length;
            images[current].classList.add('active');
        }, 3000);
    }
}

window.onscroll = function() {

    const charSections = document.querySelectorAll('.char-section');
    for (let i = 0; i < charSections.length; i++) {
        const pos = charSections[i].getBoundingClientRect().top;
        if (pos < 600) {
            charSections[i].style.opacity = "1";
            charSections[i].querySelector('h2').style.opacity = "1";
            charSections[i].querySelector('h2').style.transform = "translateY(0)";
            charSections[i].querySelector('p').style.opacity = "1";
            charSections[i].querySelector('p').style.transform = "translateY(0)";
            
            if (!charSections[i].dataset.started) {
                startSlider(charSections[i], '.slider-img');
                charSections[i].dataset.started = "true";
            }
        }
    }
	
	const bookSections = document.querySelectorAll('.book-section');
    for (let i = 0; i < bookSections.length; i++) {
        const pos = bookSections[i].getBoundingClientRect().top;
        if (pos < 600) {
            bookSections[i].style.opacity = "1";
            bookSections[i].querySelector('h2').style.opacity = "1";
            bookSections[i].querySelector('h2').style.transform = "translateY(0)";
            bookSections[i].querySelector('p').style.opacity = "1";
            bookSections[i].querySelector('p').style.transform = "translateY(0)";
            
            if (!bookSections[i].dataset.started) {
                startSlider(bookSections[i], '.slider-img');
                bookSections[i].dataset.started = "true";
            }
        }
    }

    const kingSections = document.querySelectorAll('.kingdom-section');
    for (let i = 0; i < kingSections.length; i++) {
        const pos = kingSections[i].getBoundingClientRect().top;
        if (pos < 600) {
            kingSections[i].style.opacity = "1";
            const h2 = kingSections[i].querySelector('h2');
            const p = kingSections[i].querySelector('p');
            if (h2) {
                h2.style.opacity = "1";
                h2.style.transform = "translateY(0)";
            }
            if (p) {
                p.style.opacity = "1";
                p.style.transform = "translateY(0)";
            }

            if (!kingSections[i].dataset.started) {
                startSlider(kingSections[i], '.view-img');
                kingSections[i].dataset.started = "true";
            }
        }
    }
}

window.addEventListener('load', function() {
    setTimeout(function() {
        const visibleSections = document.querySelectorAll('.char-section, .kingdom-section, .book-section');
        for (let i = 0; i < visibleSections.length; i++) {
            const section = visibleSections[i];
            const pos = section.getBoundingClientRect().top;
            if (pos < window.innerHeight && !section.dataset.started) {
                if (section.classList.contains('char-section')) {
                    startSlider(section, '.slider-img');
                    section.dataset.started = "true";
                } else if (section.classList.contains('kingdom-section')) {
                    startSlider(section, '.view-img');
                    section.dataset.started = "true";
                }
                section.style.opacity = "1";
            }
        }
    }, 100);
})
