import cn from "classnames";
import styles from "./CareersList.module.sass";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

import { careers } from "@/mocks/careers";

type CareersListProps = {t:any};

const CareersList = ({t}: CareersListProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            {careers.map((item, index) => (
                <div className={styles.item} key={index}>
                    <div className={styles.details}>
                        <div className={styles.line}>
                            {item.status.map((status, index) => (
                                <div
                                    className={cn(
                                        {
                                            "status-pink": status === "REMOTE",
                                            "status-green":
                                                status === "FULL-TIME",
                                            "status-yellow":
                                                status === "CONTRACT",
                                        },
                                        styles.status
                                    )}
                                    key={index}
                                >
                                    {status}
                                </div>
                            ))}
                        </div>
                        <div className={cn("h3", styles.title)}>
                            {item.title}
                        </div>
                        <div className={styles.content}>{item.content}</div>
                        <a
                            className={styles.apply}
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Apply now <Icon name="arrow-right" size="26" />
                        </a>
                    </div>
                    <div className={styles.preview}>
                        <Image
                            src={item.image}
                            fill
                            style={{ objectFit: 'cover' }}
                            alt="Careers"
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default CareersList;
