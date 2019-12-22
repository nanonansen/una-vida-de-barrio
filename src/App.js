import React from "react";
import { Element } from "react-scroll";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Players from "./components/Players";
import Listen from "./components/Listen";

function App() {
    return (
        <div className="App">
            <Header />

            <main className="main-content">
                <Element name="intro">
                    <Intro />
                </Element>
                {/* <div ref={section2}>
                    <Story />
                </div> */}
                <Element name="story">
                    <Story />
                </Element>
                <Element name="players">
                    <Players />
                </Element>
                <Element name="gallery">
                    <Gallery />
                </Element>
                <Element name="listen">
                    <Listen />
                </Element>
            </main>
        </div>
    );
}

export default App;
