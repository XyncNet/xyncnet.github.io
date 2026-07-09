import cn from "classnames";
import styles from "./Values.module.sass";
import Card from "@/components/Card";

import { hexToRgbA } from "@/utils/index";

type ValuesProps = {t: any};

const Values = ({t}: ValuesProps) => {
    const list = [
        { title: t("about.value1"), status: t("about.values_tag"), color: "#54C310" },
        { title: t("about.value2"), status: t("about.values_tag"), color: "#6F5BEB" },
        { title: t("about.value3"), status: t("about.values_tag"), color: "#EB5BE4" },
    ];

    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={cn("h3", styles.subtitle)}>{t("about.values_subtitle")}</div>
                    <div className={cn("h2", styles.title)}>
                        {t("about.values_title")}
                    </div>
                    <div className={styles.content}>
                        {t("about.values_content")}
                    </div>
                    <a
                      className={cn("button", styles.button)}
                      href="https://t.me/XyncPayBot?startapp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <span>app</span>
                    </a>
                </div>
                <div className={styles.col}>
                    <div className={styles.list}>
                        {list.map((item, index) => (
                            <Card
                                className={styles.card}
                                innerCardClass={styles.inner}
                                key={index}
                                color={item.color}
                                animateIn="fadeInDown"
                                small
                            >
                                <div
                                    className={cn("status", styles.status)}
                                    style={{
                                        backgroundColor: hexToRgbA(
                                            item.color,
                                            0.05
                                        ),
                                        color: item.color,
                                    }}
                                >
                                    {item.status}
                                </div>
                                <div className={cn("h4", styles.info)}>
                                    {item.title}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Values;
