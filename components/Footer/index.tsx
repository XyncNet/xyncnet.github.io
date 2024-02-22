import Link from "next/link";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import Socials from "@/components/Socials";

import { footerNavigation, documents } from "@/constants/navigation";
import { socials } from "@/constants/socials";

type FooterProps = {};

const Footer = ({}: FooterProps) => (
    <footer className={styles.footer}>
        <div className={cn("container-wide", styles.container)}>
            <div className={styles.row}>
                <Logo className={styles.logo} />
                <div className={styles.menu}>
                    {footerNavigation.map((link, index) =>
                        link.external ? (
                            <a
                                className={styles.link}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                            >
                                {link.title}
                            </a>
                        ) : (
                            <NavLink
                                className={styles.link}
                                activeClassName={styles.active}
                                href={link.url}
                                key={index}
                            >
                                {link.title}
                            </NavLink>
                        )
                    )}
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.copyright}>
                    © 2024 Xync Network. All rights reserved.
                </div>
                <div className={styles.documents}>
                    {documents.map((document, index) => (
                        <Link href={document.url} key={index}  className={styles.document} target={"_blank"}>
                            {document.title}
                        </Link>
                    ))}
                </div>
                <Socials className={styles.socials} socials={socials} />
            </div>
        </div>
    </footer>
);

export default Footer;
