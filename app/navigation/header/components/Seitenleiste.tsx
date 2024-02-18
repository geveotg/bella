"use client";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import classes from "../../style/Seitenleiste.module.scss";
// import SelectLeng from "./selectLanguige";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { menuItems } from "./data";
import Image from "next/image";

function Seitenleiste() {
    const useHeaderRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState(false);

    const showMenu = () => {
        if (document.body.offsetWidth < 767 && useHeaderRef.current) {
            setOpenMenu(!openMenu);
            if (useHeaderRef.current.style.transform == "translate(0px, 0px)") {
                useHeaderRef.current.style.transform = "translate(-320px, 0px)";
            } else {
                useHeaderRef.current.style.transform = "translate(0px, 0px)";
            }
        }
    };

    const menuItemslist = menuItems.map(({ id, name, href, icon }) => {
        return (
            <Link
                key={id}
                className={` ${classes["nav-link"]} ${
                    pathname === href ? classes["active"] : ""
                }`}
                id={classes[id]}
                href={href}
            >
                {icon ? (
                    <Image src={icon} alt="" height={80} width={80} />
                ) : (
                    name
                )}
            </Link>
        );
    });

    return (
        <div className={classes[`container`]}>
            <Image
                className={classes[`media_logo`]}
                src={"/img/logo.png"}
                alt=""
                height={80}
                width={80}
            />
            <div className={classes[`burger_menu`]} onClick={showMenu}>
                {openMenu ? (
                    <AiOutlineClose className={classes["menu_button"]} />
                ) : (
                    <RxHamburgerMenu className={classes["menu_button"]} />
                )}
            </div>
            <div
                className={classes[`seitenleiste_container`]}
                ref={useHeaderRef}
            >
                {menuItemslist}

                {/* <AutProfile /> */}
                {/* <SelectLeng /> */}
            </div>
        </div>
    );
}

export default Seitenleiste;
