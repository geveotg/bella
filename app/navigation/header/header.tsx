import classes from "./header.module.scss";
import { FC } from "react";
// import NavLinks from "./components/navLinks";
import Seitenleiste from "./components/Seitenleiste";

const Header: FC = (): JSX.Element => {
    return (
        <header className={classes["container"]}>
            {/* <NavLinks /> */}
            <Seitenleiste />
        </header>
    );
};

export default Header;
