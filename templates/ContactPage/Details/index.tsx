import Link from "next/link";
import cn from "classnames";
import styles from "./Details.module.sass";
import Form from "../Form";
import Socials from "@/components/Socials";

import { socials } from "@/constants/socials";

type DetailsProps = {
    scrollToRef: any;
    t: any;
};

const Details = ({ scrollToRef, t }: DetailsProps) => {
    return (
        <div className={cn("section", styles.section)}>
            <div
                className={cn("anchor", styles.anchor)}
                ref={scrollToRef}
            ></div>
            <div className={cn("container", styles.container)}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <Form t={t} />
                    </div>
                    <div className={styles.col}>
                        <div className={styles.item}>
                            <div className={styles.category}>Support</div>
                            <Link href="mailto:support@xync.net" className={cn("h5", styles.content)}>
                                support@xync.net
                            </Link>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.item}>
                                <div className={styles.category}>Address</div>
                                <div className={cn("h5", styles.content)}>
                                    <p>Office 304, DIC-10</p>
                                    <p>Dubai</p>
                                    <p>United Arab Emirates</p>
                                </div>
                            </div>
                        </div>
                        {/*<div className={styles.item}>*/}
                        {/*    <div className={styles.category}>Phone number</div>*/}
                        {/*    <Link href="tel:+660980018735" className={cn("h5", styles.content)}>*/}
                        {/*        +66 098 001 8735*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                        <Socials
                            socialClassName={styles.social}
                            socials={socials}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
