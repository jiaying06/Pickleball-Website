// about.js

document.addEventListener('DOMContentLoaded', function () {

    const tabs = document.querySelectorAll('.about-tabs .tab');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offset = targetSection.offsetTop - 80; 
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    const sections = document.querySelectorAll('#story, #what, #why, #who');
    const revealElements = document.querySelectorAll('.reveal');

    function onScroll() {
        const scrollPos = window.scrollY || window.pageYOffset;

        revealElements.forEach(function (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('show');
            }
        });

        let currentId = '';
        sections.forEach(function (sec) {
            const top = sec.offsetTop - 120;
            const bottom = top + sec.offsetHeight;

            if (scrollPos >= top && scrollPos < bottom) {
                currentId = sec.id;
            }
        });

        if (currentId) {
            tabs.forEach(function (tab) {
                const id = tab.getAttribute('href').substring(1);
                if (id === currentId) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
        }
    }

    onScroll();
    window.addEventListener('scroll', onScroll);
});
