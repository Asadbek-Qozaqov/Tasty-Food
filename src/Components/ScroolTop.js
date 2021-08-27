import React from 'react';

function ScroolTop(props) {

    function scrollTop() {
        const scrollTop = document.getElementById('scroll-top');

        if (this.scrollY >= 560) {
            scrollTop.classList.add('show-scroll')
        } else {
            scrollTop.classList.remove('show-scroll')
        }
    }

    window.addEventListener('scroll', scrollTop);

    return (
        <a href="#" className="scrolltop" id="scroll-top">
            <i className='bx bx-chevron-up scrolltop__icon'></i>
        </a>
    );
}

export default ScroolTop;