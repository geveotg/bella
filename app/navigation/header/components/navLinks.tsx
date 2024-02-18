"use client";
import classes from "../../style/navLinks.module.scss";
import { FC } from "react";
import Link from "next/link";
import logo from "../../../../public/img/logo.jpg";
import Image from "next/image";

const NavLinks: FC = (): JSX.Element => {
    return (
        <nav className={classes["navigation"]}>
            <Link className={classes["nav-lin"]} href={"/"}>
                <Image
                    className={classes["logo"]}
                    src={logo}
                    alt="log"
                    width={80}
                    height={80}
                />
            </Link>
        </nav>
    );
};

export default NavLinks;
