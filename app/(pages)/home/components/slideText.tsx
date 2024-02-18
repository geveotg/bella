import { FC } from "react";
import classes from "../style/slideText.module.scss";

const SlideText: FC = () => {
    return (
        <div className={classes["container"]}>
            <div className={classes["text-container"]}>
                <h1 className={classes["slide-text-title"]}>
                    Lorem ipsum dolor sit amet
                </h1>
                <p className={classes["slide-text-description"]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam nam, minus magnam fuga unde architecto id! Expedita,
                    sunt voluptates. Dolorem soluta similique expedita corrupti,
                    nihil quo! Aliquam sapiente officia aut.
                </p>
            </div>
        </div>
    );
};

export default SlideText;
