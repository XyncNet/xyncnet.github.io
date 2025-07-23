import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Development.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import {development} from "@/mocks/development";

const images = [
    "/images/figures/figure-7.png",
    "/images/figures/figure-9.png",
    "/images/figures/figure-1.png",
];

type DevelopmentProps = {t: any};

const Development = ({t}: DevelopmentProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <h2 className={cn("h2", styles.title)}>
                    Xync makes blockchain development accessible for everyone.
                </h2>
                <div className={styles.info}>
                    Xync&apos;s complete suite of blockchain-scaling solutions.
                </div>
            </div>
            <div className={styles.list}>
                {development.map((item, index) => (
                    <Card
                        className={styles.card}
                        url={item.url}
                        color={item.color}
                        key={index}
                        animateIn="fadeInDown"
                    >
                        <div className={cn("h3", styles.subtitle)}>
                            {t("dev."+item.title+".title")}
                        </div>
                        <div className={styles.content}>
                            <p style={{color: "#999", fontWeight: "bold", marginBottom: 8}}>
                                {t("dev."+item.title+".desc")}
                            </p>
                            {t("dev."+item.title+".info")}
                        </div>
                        <div className={styles.preview}>
                            <div className={styles.inner}>
                                <Image
                                    src={item.image}
                                    fill
                                    alt="Figure"
                                />
                            </div>
                        </div>
                        <div className={styles.foot}>
                            <a
                                href={item.url}
                                className={styles.more}
                                style={{ color: item.color }}
                            >
                                {t("more")}
                            </a>
                            <Icon
                                className={styles.arrow}
                                name="arrow-right"
                                size="26"
                            />
                        </div>
                    </Card>
                ))}
            </div>
        </div>
        <div className={styles.images}>
            {images.map((image, index) => (
                <Parallax
                    className={styles.image}
                    speed={4}
                    easing="easeInQuad"
                    key={index}
                >
                    <Image src={image} fill alt="Figure" />
                </Parallax>
            ))}
        </div>
    </div>
);

export default Development;
