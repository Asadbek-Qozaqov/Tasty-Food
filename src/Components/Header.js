import React, {useState, useEffect} from 'react';

function Header() {
    function scrollActive() {

        const sections = document.querySelectorAll('section[id]');

        const scrollY = window.pageYOffset;                  //topdanbosibo'tilganmasofa

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;      //sectioncardnibalandligi
            const sectionTop = current.offsetTop - 100;      //harbirsecioncarditopdanqanchamasofadaturganibalandlik
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }

    window.addEventListener('scroll', scrollActive);

    const [showMenu, setShowMenu] = useState(false);

    function showMenuMobile() {
        setShowMenu(!showMenu);
    }

    window.addEventListener('scroll', () => {
        if (showMenu) {
            showMenuMobile()
        }
    });

    function scrollHeader() {
        const nav = document.getElementById('header');
        if (this.scrollY >= 200) {
            nav.classList.add('scroll-header')
        } else {
            nav.classList.remove('scroll-header')
        }
    }

    window.addEventListener('scroll', scrollHeader);

    const [changeTheme, setChaneTheme] = useState(true);

    function themeButton() {
        setChaneTheme(!changeTheme);
    }

    if (changeTheme) {
        document.body.classList.add("dark-theme")
    } else {
        document.body.classList.remove("dark-theme")
    }

    return (
        <header className="l-header" id="header">
            <nav
                className="nav bd-container">
                <a href="#" className="nav__logo" onClick={showMenuMobile}>Tasty</a>

                <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}
                    id="nav-menu">
                    <ul
                        className="nav__list">
                        <li className="nav__item"><a href="#home"
                            className="nav__link active-link" onClick={showMenuMobile}>Home</a>
                        </li>
                        <li
                            className="nav__item"><a
                            href="#about"
                            className="nav__link" onClick={showMenuMobile}>About</a></li>
                        <li
                            className="nav__item"><a
                            href="#services"
                            className="nav__link" onClick={showMenuMobile}>Services</a>
                        </li>
                        <li
                            className="nav__item"><a
                            href="#menu"
                            className="nav__link" onClick={showMenuMobile}>Menu</a></li>
                        <li
                            className="nav__item"><a
                            href="#contact"
                            className="nav__link" onClick={showMenuMobile}>Contact
                            us</a>
                        </li>

                        <li>
                            <i className={changeTheme ? "bx bx-sun change-theme" : "bx bx-moon change-theme"}
                               onClick={themeButton}>

                            </i>
                        </li>
                    </ul>
                </div>

                <div className="nav__toggle" onClick={showMenuMobile}>
                    <i className={showMenu ? "bx bx-x" : "bx bx-menu"}>

                    </i>
                </div>
            </nav>
        </header>
    );
}

export default Header;