"use client";

import { FC } from "react";
import { Carousel } from "antd";
import classes from "../style/homeSlide.module.scss";
import Image from "next/image";
import homeSlide from "../../../../public/img/homeSlide.webp";
import homeSlide2 from "../../../../public/img/homeSlide2.webp";
import homeSlide3 from "../../../../public/img/homeSlide3.webp";
import SlideText from "./slideText";

const HomeSlide: FC = () => {
    const slide_list = [homeSlide, homeSlide2, homeSlide3].map((el, i) => {
        return (
            <div key={i}>
                <Image
                    className={classes["slide_image"]}
                    src={el}
                    alt="slide"
                    priority
                />
            </div>
        );
    });

    return (
        <div className={classes["container"]}>
            <SlideText />
            <div className={classes["scale-up-center"]}>
                <Carousel autoplay>{slide_list}</Carousel>
            </div>
        </div>
    );
};

export default HomeSlide;
