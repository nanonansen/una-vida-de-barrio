import React from "react";

const Story = () => {
    return (
        <section className="story">
            <div className="story__content">
                <div className="content__left">
                    <figure className="story__image">
                        <img
                            src="https://res.cloudinary.com/dyfeqwvl2/image/upload/v1576258644/story_image_gf9jjl.jpg"
                            alt=""
                        />
                    </figure>
                </div>
                <div className="content__right">
                    <p>
                        Wherever in the world I've travelled to, I’ve always
                        kicked some balls with the locals. Football brings
                        people together. So when I moved to Berlin six years
                        ago, it was only normal to put a little Fußball crew
                        together.
                    </p>
                    <p>
                        My roommate Nicolas and I started playing weekly
                        five-a-sides on a small, ghetto pitch on Mittenwalder
                        Str. in Kreuzberg 61. Every week, more mates of mates
                        would show up, or folks visiting, wanting to play. Most
                        of these people would be djs, producers or music lovers
                        at least.
                    </p>
                    <p>
                        This release has been a long long time in the making. It
                        compiles the work of some of the player-producers that
                        have joined us in the Kreuzberg footie cage on Kreuzberg
                        evenings. Presented here are 11 tracks (what did you
                        expect?), each dedicated to the composer’s favourite
                        football player. A tribute to their unique skills, an
                        ode to the joy they brought into our lives in the
                        beautiful game. This compilation itself can be seen as
                        an all-star fantasy Manschaft in its own right.
                    </p>
                    <p>
                        “Una Vida De Barrio”, then? That’s what the graffiti on
                        the wall of the cage says. Sometimes you don’t need to
                        look for a title, but it simply chooses you.
                    </p>
                    <p className="author">(Tristan Jong)</p>
                </div>
            </div>
        </section>
    );
};

export default Story;
