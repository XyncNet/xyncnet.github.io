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

    return (
        <div>
            <button
                className={cn(styles.burger, { [styles.active]: visible })}
                onClick={handleClick}
            >
                <span></span>
                <span></span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 40 40"
                >
                    <mask id="A" fill="#fff">
                        <path d="M12.799.586A2 2 0 0 1 14.213 0H38a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V14.213a2 2 0 0 1 .586-1.414L12.799.586z" />
                    </mask>
                    <path
                        d="M.586 12.799l-1.414-1.414 1.414 1.414zM38 2H14.213v-4H38v4zm0 36V2h4v36h-4zM2 38h36v4H2v-4zm0-23.787V38h-4V14.213h4zm-2.828-2.828L11.385-.828 14.213 2 2 14.213-.828 11.385zM-2 14.213a4 4 0 0 1 1.172-2.828L2 14.213h-4zM2 42a4 4 0 0 1-4-4h4v4zm40-4a4 4 0 0 1-4 4v-4h0 4zM14.213 2h0L11.385-.828A4 4 0 0 1 14.213-2v4zM38-2a4 4 0 0 1 4 4h-4 0v-4z"
                        fill="#eb5be5"
                        mask="url(#A)"
                    />
                </svg>
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
                                                {link.title}
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
                                                {link.title}
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
