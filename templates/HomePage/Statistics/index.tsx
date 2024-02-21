import cn from "classnames";
import styles from "./Statistics.module.sass";

import { statistics } from "@/mocks/statistics";

type StatisticsProps = {};

const Statistics = ({}: StatisticsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container-large", styles.container)}>
            <div className={styles.wrapper}>
                <div className={styles.list}>
                    {statistics.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <div className={cn("h3", styles.value)}>
                                {item.value}
                            </div>
                            <div className={styles.title}>{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Statistics;
