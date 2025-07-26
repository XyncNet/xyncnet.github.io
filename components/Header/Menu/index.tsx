import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { CSSTransition } from "react-transition-group";
import { useHotkeys } from "react-hotkeys-hook";
import cn from "classnames";
import styles from "./Menu.module.sass";
import NavLink from "@/components/NavLink";
import Socials from "@/components/Socials";
import Image from "@/components/Image";
import {useTranslation} from "@/contexts/LanguageContext";

type NavigationType = {
    title: string;
    url: string;
    external?: boolean;
};

type MenuProps = {
    navigation: NavigationType[];
    socials: any;
    onClick: () => void;
};

const Menu = ({ navigation, socials, onClick }: MenuProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);

    useHotkeys("esc", () => setVisible(false), {
        enableOnTags: ["INPUT", "TEXTAREA"],
    });

    const initialRender = useRef(true);
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            visible ? disablePageScroll() : enablePageScroll();
        }
    }, [visible]);

    useEffect(() => setLoaded(true), []);

    const ref = useRef(null);

    const handleClick = () => {
        setVisible(!visible);
        onClick();
    };

    const { t } = useTranslation()

    return (
        <div>
            <button
                className={cn(styles.burger, { [styles.active]: visible })}
                onClick={handleClick}
            >
                <span></span>
                <span></span>
            </button>
            {loaded
                ? createPortal(
                    <CSSTransition
                        classNames="menu"
                        in={visible}
                        timeout={400}
                        nodeRef={ref}
                        unmountOnExit
                    >
                        <div
                            className={cn(styles.menu)}
                            onClick={() => setVisible(false)}
                            ref={ref}
                        >
                            <div
                                className={cn(
                                    "menu-container",
                                    styles.container
                                )}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <nav className={styles.nav}>
                                    {navigation.map((link, index) =>
                                        link.external ? (
                                            <a
                                                className={cn(
                                                    "h2",
                                                    styles.link
                                                )}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                key={index}
                                            >
                                                {t("nav."+link.title)}
                                            </a>
                                        ) : (
                                            <NavLink
                                                className={cn(
                                                    "h2",
                                                    styles.link
                                                )}
                                                activeClassName={
                                                    styles.active
                                                }
                                                href={link.url}
                                                key={index}
                                            >
                                                {t("nav."+link.title)}
                                            </NavLink>
                                        )
                                    )}
                                </nav>
                                <div className={styles.line}>
                                    <Socials
                                        className={styles.socials}
                                        socials={socials}
                                    />
                                    <div className={styles.details}>
                                        <div className={styles.note}>
                                            Email
                                        </div>
                                        <a
                                            className={styles.email}
                                            href="mailto:support@xync.net"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            support@xync.net
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.lines}>
                                    <Image
                                        src="/images/menu-lines.svg"
                                        width={507}
                                        height={980}
                                        alt="Lines"
                                    />
                                </div>
                            </div>
                        </div>
                    </CSSTransition>,
                    document.body
                )
                : <></>}
        </div>
    );
};

export default Menu;
