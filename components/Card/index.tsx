import { AnimationOnScroll } from "react-animation-on-scroll";
import Link from "next/link";
import cn from "classnames";
import styles from "./Card.module.sass";

type CardProps = {
    className?: string;
    backgroundCardClass?: string;
    squareCardClass?: string;
    cornerCardClass?: string;
    innerCardClass?: string;
    color?: string;
    url?: string;
    children: React.ReactNode;
    small?: boolean;
    animateIn?: string;
    style?: React.CSSProperties;
    delay?: number;
};

const Card = ({
    className,
    backgroundCardClass,
    squareCardClass,
    cornerCardClass,
    innerCardClass,
    color,
    url,
    children,
    small,
    animateIn,
    style,
    delay,
}: CardProps) => {
    const inner = (
        <>
            <div className={cn(styles.background, backgroundCardClass)}></div>
            <div
                className={cn(styles.square, squareCardClass)}
                style={{ backgroundColor: color || "#EB5BE4" }}
            ></div>
            <svg
                className={cn(styles.corner, cornerCardClass)}
                preserveAspectRatio="none"
                width="77"
                height="124"
                viewBox="0 0 77 124"
            >
                <path
                    d={
                        small
                            ? "M35.453 9.373C29.455 3.371 21.32 0 12.839 0H.116C.113 0 .127 0 .16 0v100h76.956V64.314a32.01 32.01 0 0 0-9.368-22.627L35.453 9.373z"
                            : "M77 124V78.231c0-8.489-3.371-16.629-9.373-22.632L21.388 9.35A32 32 0 0 0 0 0v124h77z"
                    }
                />
            </svg>
            <div className={cn(styles.inner, innerCardClass)}>{children}</div>
        </>
    );

    return animateIn ? (
        <AnimationOnScroll
            className={cn(styles.card, { [styles.small]: small }, className)}
            animateIn={animateIn}
            style={style}
            delay={delay}
            animateOnce
        >
            {url ? (
                <Link href={url} className={styles.link}>
                    {inner}
                </Link>
            ) : (
                inner
            )}
        </AnimationOnScroll>
    ) : (
        <>
            {url ? (
                <Link href={url} className={cn(
                    styles.card,
                    {[styles.small]: small},
                    className
                )}>
                    {inner}
                </Link>
            ) : (
                <div
                    className={cn(
                        styles.card,
                        { [styles.small]: small },
                        className
                    )}
                >
                    {inner}
                </div>
            )}
        </>
    );
};

export default Card;
