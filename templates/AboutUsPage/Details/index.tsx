import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import cn from "classnames";
import styles from "./Details.module.sass";
import Image from "@/components/Image";

type DetailsProps = {
    scrollToRef: any;
    t: any
};

const Details = ({ scrollToRef, t }: DetailsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("anchor", styles.anchor)} ref={scrollToRef}></div>
        <div className={cn("container", styles.container)}>
            <div className={styles.details}>
                <div className={styles.counter}>{t("about.counter")}</div>
                <div className={cn("h4", styles.info)}>{t("about.counter_label")}</div>
            </div>
            <div className={styles.wrap}>
                <div className={cn("content", styles.content)}>
                    <h2>{t("about.det_h2")}</h2>
                    <h3>{t("about.det_h3")}</h3>
                    <p>{t("about.det_p1")}</p>
                    <p>{t("about.det_p2")}</p>
                </div>
                <Link href="/contact" className={cn("button", styles.button)}>
                    <span>{t("about.det_contact")}</span>
                </Link>
            </div>
            <Parallax
                className={styles.image}
                speed={1}
                easing="easeInQuad"
                rotate={[2, -15]}
            >
                <Image
                    src="/images/figures/figure-7.png"
                    fill
                    alt="Figure"
                />
            </Parallax>
        </div>
    </div>
);

export default Details;
