import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Details.module.sass";
import Form from "../Form";
import Socials from "@/components/Socials";

import { socials } from "@/constants/socials";

type DetailsProps = {
    scrollToRef: any;
};

const Details = ({ scrollToRef }: DetailsProps) => {
    return (
        <div className={cn("section", styles.section)}>
            <div
                className={cn("anchor", styles.anchor)}
                ref={scrollToRef}
            ></div>
            <div className={cn("container", styles.container)}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <Form />
                    </div>
                    <div className={styles.col}>
                        <div className={styles.item}>
                            <div className={styles.category}>Support</div>
                            <Link href="mailto:hello@xync.net" className={cn("h5", styles.content)}>
                                hello@xync.net
                            </Link>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.item}>
                                <div className={styles.category}>Address 1</div>
                                <div className={cn("h5", styles.content)}>
                                    <p>4955 Serenity Unions</p>
                                    <p>Oregon</p>
                                    <p>Cambridgeshire</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.category}>Address 2</div>
                                <div className={cn("h5", styles.content)}>
                                    <p>4955 Serenity Unions</p>
                                    <p>Oregon</p>
                                    <p>Dubai</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.category}>Phone number</div>
                            <Link href="tel:+44987456321" className={cn("h5", styles.content)}>
                                +44 987 456 321
                            </Link>
                        </div>
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
