import cn from "classnames";
import styles from "./Posts.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { hexToRgbA } from "@/utils/index";

const list = [
    {
        title: "Everything Xync weekly report",
        status: "UPDATES",
        date: "08/11/2022",
        color: "#EB5BE5",
        url: "/blog/article",
    },
    {
        title: "Everything Xync weekly report",
        status: "UPDATES",
        date: "08/11/2022",
        color: "#6F5BEB",
        url: "/blog/article",
    },
    {
        title: "Everything Xync weekly report",
        status: "NEW RELEASE",
        date: "08/11/2022",
        color: "#89EB5B",
        url: "/blog/article",
    },
];

type PostsProps = {};

const Posts = ({}: PostsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.col}>
                <div className={cn("h2", styles.title)}>
                    Your gateway to everything Xync.
                </div>
                <div className={styles.content}>
                    Stay current on the latest Xync project developments, news,
                    and content, updated daily.
                </div>
                <div className={styles.preview}>
                    <Image
                        src="/images/about-pic-3.png"
                        width={712}
                        height={729}
                        alt="Figure"
                    />
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.list}>
                    {list.map((item, index) => (
                        <Card
                            className={styles.card}
                            innerCardClass={styles.inner}
                            key={index}
                            color={item.color}
                            url={item.url}
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
                            <div className={styles.line}>
                                <div className={styles.date}>{item.date}</div>
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
    </div>
);

export default Posts;
