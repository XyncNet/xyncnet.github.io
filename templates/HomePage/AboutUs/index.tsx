import cn from "classnames";
import styles from "./AboutUs.module.sass";
import Image from "@/components/Image";

import { details } from "@/constants/detailsAbout";

type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            {details.map((item, index) => (
                <div className={styles.item} key={index}>
                    <div className={styles.wrap}>
                        <div className={cn("content", styles.content)}>
                            {item.content}
                        </div>
                        <div className={styles.line}>
                            <button className={cn("button", styles.button)}>
                                <span>launch app</span>
                            </button>
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
