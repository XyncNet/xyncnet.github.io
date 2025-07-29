import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./JoinCommunity.module.sass";
import Image from "@/components/Image";

const images = [
    "/images/figures/figure-1.png",
    "/images/figures/figure-2.png",
    "/images/join/image-3.svg",
    "/images/figures/figure-5.png",
    "/images/figures/figure-6.png",
];

type JoinCommunityProps = {
    t: any;
    title: string;
};

const JoinCommunity = ({ t, title }: JoinCommunityProps) => (
    <div className={styles.section}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={cn("h2", styles.title)}>{title}</div>
                <div className={styles.info}>
                    {t("get_more")}
                    <a
                        className={styles.social}
                        href="/about"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t("more_link")}
                    </a>
                    .
                </div>
                <a
                    className={cn("button", styles.button)}
                    href="https://t.me/XyncNet"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>{t("join_link")}</span>
                </a>
            </div>
        </div>
        <div className={styles.images}>
            <div className={styles.image}>
                <Image
                    src="/images/join/lines.svg"
                    width={1744}
                    height={700}
                    alt="Figure"
                />
            </div>
            {images.map((image, index) => (
                <Parallax
                    className={styles.image}
                    speed={1}
                    easing="easeInQuad"
                    rotate={index === 2 ? [2, -20] : [-4, 15]}
                    key={index}
                >
                    <Image src={image} fill alt="Figure" priority={false} />
                </Parallax>
            ))}
        </div>
    </div>
);

export default JoinCommunity;
