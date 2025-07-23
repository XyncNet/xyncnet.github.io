import cn from "classnames";
import styles from "./BlogList.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { blog } from "@/mocks/blog";

type BlogListProps = {t: any};

const BlogList = ({t}: BlogListProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.list}>
                {blog.map((item, index) => (
                    <Card
                        className={styles.card}
                        url={item.url}
                        color={item.color}
                        key={index}
                        animateIn="fadeInDown"
                    >
                        <div className={cn("h3", styles.subtitle)}>
                            {item.title}
                        </div>
                        <div className={styles.content}>{item.content}</div>
                        <div className={styles.preview}>
                            <Image
                                src={item.image}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="Figure"
                            />
                        </div>
                        <div className={styles.foot}>
                            <div
                                className={styles.more}
                                style={{ color: item.color }}
                            >
                                Read more
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
            <div className={styles.btns}>
                <button className="button">
                    <span>load more</span>
                </button>
            </div>
        </div>
    </div>
);

export default BlogList;
