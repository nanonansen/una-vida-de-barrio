import React from "react";
const galleryData = [1, 2, 3, 4, 6, 7, 8, 9, 10];
const Gallery = () => {
    return (
        <section className="gallery">
            {/* <div className="section-header">
                <span>3</span>
            </div> */}
            <div className="gallery__content">
                {galleryData.map((image, index) => {
                    return (
                        <figure key={index}>
                            <img
                                src="https://res.cloudinary.com/dyfeqwvl2/image/upload/v1576244692/test_image_upikbj.jpg"
                                alt=""
                            />
                        </figure>
                    );
                })}
            </div>
            <h2>Gallery Section</h2>
        </section>
    );
};

export default Gallery;
