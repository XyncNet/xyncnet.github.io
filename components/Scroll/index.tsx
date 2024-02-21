import cn from "classnames";
import styles from "./Scroll.module.sass";

type ScrollProps = {
    className?: string;
    mouseClassName?: string;
    title: string;
    row?: boolean;
    onScroll?: () => void;
};

const Scroll = ({
    className,
    mouseClassName,
    title,
    row,
    onScroll,
}: ScrollProps) => (
    <button
        className={cn(styles.scroll, { [styles.row]: row }, className)}
        onClick={onScroll}
    >
        <span className={cn(styles.mouse, mouseClassName)}></span>
        {title}
    </button>
);

export default Scroll;
