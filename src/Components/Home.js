import React from 'react';

function Home(props) {
    return (
        <section className="home" id="home">
            <div className="home__container bd-container bd-grid">
                <div className="home__data">
                    <h1 className="home__title">Tasty food</h1>
                    <h2 className="home__subtitle">Try the best food of <br/> the week.</h2>
                    <a href="#" className="button">View Menu</a>
                </div>

                <img src="img/home.png" alt="" className="home__img"/>
            </div>
        </section>
    );
}

export default Home;