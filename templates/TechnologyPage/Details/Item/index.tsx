import cn from "classnames";
import styles from "./Item.module.sass";
import Image from "@/components/Image";

type ItemProps = {
    className?: string;
    itemWrapClass?: string;
    item: any;
};

const Item = ({ className, itemWrapClass, item }: ItemProps) => (
    <div className={cn(styles.item, className)}>
        <div className={cn(styles.wrap, itemWrapClass)}>
            <div className={cn("content", styles.content)}>{item.content}</div>
            {item.blockquote && (
                <div className={styles.blockquote}>
                    <div className={cn("h3", styles.comment)}>
                        {item.blockquote.content}
                    </div>
                    <div className={styles.author}>
                        <div className={styles.avatar}>
                            <Image
                                src={item.blockquote.avatar}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="Avatar"
                            />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.name}>
                                {item.blockquote.name}
                            </div>
                            <div className={styles.position}>
                                {item.blockquote.position}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <div className={styles.preview}>
            <div className={styles.inner}>
                <Image
                    src={item.image}
                    width={497}
                    height={854}
                    alt="Technology"
                />
                <svg width="0" height="0" style={{ display: "block" }}>
                    <clipPath
                        id="polygonImage"
                        clipPathUnits="objectBoundingBox"
                    >
                        <path d="M0 0h.838c.017 0 .033.004.045.01l.05.028.047.026c.013.007.02.017.02.027V1H0V0z" />
                    </clipPath>
                </svg>
            </div>
            <div
                className={styles.square}
                style={{ backgroundColor: item.color }}
            ></div>
        </div>
    </div>
);

export default Item;
