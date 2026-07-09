import cn from "classnames";
import styles from "./AboutUs.module.sass";
import Image from "@/components/Image";

type AboutUsProps = {t: any, locale: string};

const AboutUs = ({t, locale}: AboutUsProps) => {
    const list = [t("tech_about.p1"), t("tech_about.p2")];
    const whitepaper = locale === "ru"
        ? "/papers/whitepaper.ru.pdf"
        : "/papers/whitepaper.en.pdf";

    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.row}>
                <div className={styles.wrap}>
                    <div className={cn("h2", styles.title)}>
                        {t("tech_about.title")}
                    </div>
                    <div className={styles.info}>
                        {t("tech_about.info")}
                    </div>
                    <div className={styles.list}>
                        {list.map((item, index) => (
                            <div className={styles.item} key={index}>
                                <div className={cn("h3", styles.number)}>
                                    0{index + 1}
                                </div>
                                <div className={styles.content}>{item}</div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.line}>
                        <a
                          className={cn("button", styles.button)}
                          href="https://t.me/XyncPayBot?startapp"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                            <span>app</span>
                        </a>
                        <a
                          className={styles.document}
                          href={whitepaper}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                            {t("read_docs")}
                        </a>
                    </div>
                </div>
                <div className={styles.preview}>
                    <Image
                      src="/images/about-pic-2.png"
                      width={712}
                      height={682}
                      alt="Figure"
                    />
                </div>
            </div>
        </div>
    </div>
    );
};

export default AboutUs;
