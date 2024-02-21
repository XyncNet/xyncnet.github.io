import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import cn from "classnames";
import styles from "./Posts.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type PostsType = {
    title: string;
    date: string;
    image: string;
    status?: string;
    color?: string;
    url: string;
};

type PostsProps = {
    className?: string;
    title: string;
    info: string;
    posts: PostsType[];
    background?: boolean;
};

const Posts = ({ className, title, info, posts, background }: PostsProps) => (
    <div
        className={cn(
            className,
            { [styles.background]: background },
            styles.section
        )}
    >
        <div className={cn("container", styles.container)}>
            <div className={styles.row}>
                <div className={styles.wrap}>
                    <div className={cn("h2", styles.title)}>{title}</div>
                    <div className={styles.info}>{info}</div>
                    <Link href="/blog" className={cn("button", styles.button)}>
                        <span>view all posts</span>
                    </Link>
                </div>
                <div className={styles.list}>
                    {posts.map((item, index) => (
                        <Card
                            className={styles.card}
                            cornerCardClass={styles.corner}
                            backgroundCardClass={styles.backgroundCard}
                            squareCardClass={styles.square}
                            innerCardClass={styles.inner}
                            color={item.color}
                            key={index}
                            url={item.url}
                            animateIn="fadeInDown"
                            small
                        >
                            <div className={styles.preview}>
                                <Image
                                    src={item.image}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    alt="Post"
                                />
                            </div>
                            <div className={styles.details}>
                                <div
                                    className={cn("status", styles.status)}
                                    style={{ color: item.color }}
                                >
                                    {item.status}
                                </div>
                                <div className={cn("h4", styles.subtitle)}>
                                    {item.title}
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.date}>
                                        {item.date}
                                    </div>
                                    <Icon
                                        className={styles.arrow}
                                        name="arrow-right"
                                        size="26"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
            <Parallax
                className={styles.image}
                speed={1}
                easing="easeInQuad"
                rotate={[2, -10]}
            >
                <Image
                    src="/images/figures/figure-10.png"
                    width={696}
                    height={696}
                    alt="Spike"
                />
            </Parallax>
        </div>
    </div>
);

export default Posts;
