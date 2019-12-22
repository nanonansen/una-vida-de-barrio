import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Star from "../Star";

import gridData from "../../introData";

const Intro = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(false);
        setTimeout(() => {
            setShow(true);
        }, 500);
    }, []);
    return (
        <section className="intro">
            <div className="grid">
                {gridData.map((el, index) => {
                    let delay = 50 * index;
                    if (el.type === "text") {
                        return (
                            <span className="grid__item" key={index}>
                                <CSSTransition
                                    in={show}
                                    timeout={1000 + delay}
                                    classNames="fade"
                                    style={{
                                        transitionDelay: `${delay}ms`
                                    }}
                                >
                                    <span className="intro__text">
                                        {el.text}
                                    </span>
                                </CSSTransition>
                            </span>
                        );
                    }
                    if (el.type === "icon") {
                        return (
                            <span className="grid__item" key={index}>
                                <CSSTransition
                                    in={show}
                                    timeout={1000 + delay}
                                    classNames="fade"
                                    style={{
                                        transitionDelay: `${delay}ms`
                                    }}
                                >
                                    <Star />
                                </CSSTransition>
                            </span>
                        );
                    }
                    if (el.type === "image") {
                        return (
                            <span className="grid__item" key={index}>
                                <figure className="intro__image-wrapper">
                                    <CSSTransition
                                        in={show}
                                        timeout={1000 + delay}
                                        classNames="fade"
                                        style={{
                                            transitionDelay: `${delay}ms`
                                        }}
                                    >
                                        <img src={el.url} alt="" />
                                    </CSSTransition>
                                </figure>
                            </span>
                        );
                    }
                    if (el.type === "empty") {
                        return <span className="grid__item" key={index}></span>;
                    }
                    return null;
                })}
            </div>
        </section>
    );
};

export default Intro;
