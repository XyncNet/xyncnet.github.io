import Link from "next/link";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import Socials from "@/components/Socials";

import { footerNavigation, documents } from "@/constants/navigation";
import { socials } from "@/constants/socials";

type FooterProps = {t: any};

const Footer = ({t}: FooterProps) => (
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
                                {t("nav."+link.title)}
                            </a>
                        ) : (
                            <NavLink
                                className={styles.link}
                                activeClassName={styles.active}
                                href={link.url}
                                key={index}
                            >
                                {t("nav."+link.title)}
                            </NavLink>
                        )
                    )}
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.copyright}>
                    © 2024 Xync Network. {t("rights")}.
                </div>
                <div className={styles.documents}>
                    {documents.map((document, index) => (
                        <Link href={document.url} key={index}  className={styles.document} target={"_blank"}>
                            {t(document.title)}
                        </Link>
                    ))}
                </div>
                <Socials className={styles.socials} socials={socials} />
            </div>
        </div>
    </footer>
);

export default Footer;
