import { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";

type ItemProps = {
    className?: string;
    item: any;
};

const Item = ({ className, item }: ItemProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div
            className={cn(
                styles.item,
                {
                    [styles.active]: visible,
                },
                className
            )}
        >
            <div className={styles.head} onClick={() => setVisible(!visible)}>
                <div className={cn("h4", styles.subtitle)}>{item.title}</div>
                <div className={styles.plus}>
                    <div className={styles.inner}></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="none"
                        viewBox="0 0 40 40"
                    >
                        <mask id="A" fill="#fff">
                            <path d="M12.799.586A2 2 0 0 1 14.213 0H38a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V14.213a2 2 0 0 1 .586-1.414L12.799.586z" />
                        </mask>
                        <path
                            d="M.586 12.799l-1.414-1.414 1.414 1.414zM38 2H14.213v-4H38v4zm0 36V2h4v36h-4zM2 38h36v4H2v-4zm0-23.787V38h-4V14.213h4zm-2.828-2.828L11.385-.828 14.213 2 2 14.213-.828 11.385zM-2 14.213a4 4 0 0 1 1.172-2.828L2 14.213h-4zM2 42a4 4 0 0 1-4-4h4v4zm40-4a4 4 0 0 1-4 4v-4h0 4zM14.213 2h0L11.385-.828A4 4 0 0 1 14.213-2v4zM38-2a4 4 0 0 1 4 4h-4 0v-4z"
                            fill="#5e6b7e"
                            mask="url(#A)"
                        />
                    </svg>
                </div>
            </div>
            <div className={styles.body}>{item.content}</div>
        </div>
    );
};

export default Item;
