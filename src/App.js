import React from 'react';
import Main from "./Components/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScroolTop from "./Components/ScroolTop";
import "aos/dist/aos.css"

function App() {
    return (
        < div>
            < div>
                <ScroolTop/>

                <Header/>

                <Main/>

                <Footer/>
            </div>
        </div>
    )
        ;
}

export default App;




