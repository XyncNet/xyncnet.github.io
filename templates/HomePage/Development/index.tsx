import { useRef } from "react";
// import SimpleBar from "simplebar-react";
import { useDraggable } from "react-use-draggable-scroll";
import cn from "classnames";
import styles from "./Development.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { development } from "@/mocks/development";

type DevelopmentProps = {
    scrollToRef: any;
    t: any;
};

const Development = ({ scrollToRef, t }: DevelopmentProps) => {
    const ref =
        useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref);

    return (
        <div className={cn("section", styles.section)}>
            <div
                className={cn("anchor", styles.anchor)}
                ref={scrollToRef}
            ></div>
            <div className={cn("container-wide", styles.container)}>
                <h2 className={cn("h2", styles.title)}>{t("dev_title")}.</h2>
                <div className={styles.list} {...events} ref={ref}>
                    {development.map((item, index) => (
                        <Card
                            className={styles.card}
                            url={item.url}
                            color={item.color}
                            key={index}
                            animateIn="fadeInDown"
                            delay={item.delay}
                        >
                            <div className={styles.preview}>
                                <Image
                                    src={item.image}
                                    fill
                                    alt="Figure"
                                />
                            </div>
                            <div className={cn("h3", styles.subtitle)}>
                                {t("dev."+item.title+".title")}
                            </div>
                            <div className={styles.content}>{t("dev."+item.title+".desc")}</div>
                            <div className={styles.foot}>
                                <div
                                    className={styles.more}
                                    style={{ color: item.color }}
                                >
                                    {t("more")}
                                </div>
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
        </div>
    );
};

export default Development;
