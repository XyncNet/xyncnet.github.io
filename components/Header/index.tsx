import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "@/components/Logo";
import Menu from "./Menu";

import { headerNavigation } from "@/constants/navigation";
import { socials } from "@/constants/socials";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    useScrollPosition(({ currPos }) => {
        setHeaderStyle(currPos.y <= -2);
    });

    return (
        <header
            className={cn(
                {
                    [styles.visible]: headerStyle,
                    [styles.open]: open,
                },
                styles.header
            )}
        >
            <div
                className={cn("container-wide", styles.container)}
                data-scroll-lock-scrollable
                data-scroll-lock-fill-gap
            >
                <Logo className={styles.logo} />
                <LanguageSwitcher/>
                <Menu
                    navigation={headerNavigation}
                    socials={socials}
                    onClick={() => setOpen(!open)}
                />
                <a
                    className={cn("button", styles.button)}
                    href="https://t.me/XyncNetBot/test"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>app</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
