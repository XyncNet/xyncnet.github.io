import cn from "classnames";
import styles from "./AboutUs.module.sass";
import Image from "@/components/Image";

const list = [
    "Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes.",
    "Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes.",
];

type AboutUsProps = {t: any};

const AboutUs = ({t}: AboutUsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.row}>
                <div className={styles.wrap}>
                    <div className={cn("h2", styles.title)}>
                        Stay up to date on everything
                    </div>
                    <div className={styles.info}>
                        Stay current on the latest Xync project developments,
                        news, and content, updated daily.
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
                          href="https://t.me/XyncNetBot/test"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                            <span>app</span>
                        </a>
                        <button className={styles.document}>
                            Read the docs
                        </button>
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

export default AboutUs;
