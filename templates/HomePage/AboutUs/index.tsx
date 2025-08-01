import cn from "classnames";
import styles from "./AboutUs.module.sass";
import Image from "@/components/Image";

import { details } from "@/constants/detailsAbout";

type AboutUsProps = {t: any, locale: string};

const AboutUs = ({t, locale}: AboutUsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            {details.map((item, index) => (
                <div className={styles.item} key={index}>
                    <div className={styles.wrap}>
                      <div className={cn("content", styles.content)}>
                        {
                            // @ts-ignore
                            item.content[locale]
                        }
                      </div>
                      <div className={styles.line}>
                        <div style={{marginRight: 32}}>
                          <a
                              className={cn("button", styles.button)}
                              href="https://t.me/XyncNetBot/test"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            <span>app</span>
                          </a>
                        </div>
                        <button className={styles.document}>
                          Read the docs
                        </button>
                      </div>
                    </div>
                  <div className={styles.preview}>
                    <Image
                      src={item.image.src}
                      width={item.image.width}
                      height={item.image.height}
                      alt={item.image.alt}
                    />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default AboutUs;
