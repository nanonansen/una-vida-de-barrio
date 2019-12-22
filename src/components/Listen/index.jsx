import React from "react";
import Button from "../Button";
const Listen = () => {
    return (
        <section className="listen">
            <div className="listen__content">
                <div className="listen__bandcamp">
                    <figure className="listen__image">
                        <img
                            src="https://res.cloudinary.com/dyfeqwvl2/image/upload/v1576246584/4_fh6bzh.jpg"
                            alt=""
                        />
                    </figure>

                    <Button>Bandcamp</Button>
                </div>
                <div className="field_circle"></div>
                <div className="listen__spotify">
                    <figure className="listen__image">
                        <img
                            src="https://res.cloudinary.com/dyfeqwvl2/image/upload/v1576246584/5_v8rqyj.jpg"
                            alt=""
                        />
                    </figure>
                    <Button>Spotify</Button>
                </div>
            </div>
        </section>
    );
};

export default Listen;
