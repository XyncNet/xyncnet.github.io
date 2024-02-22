import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Scroll from "@/components/Scroll";

const images = [
    "/images/figures/figure-1.png",
    "/images/figures/figure-2.png",
    "/images/figures/figure-3.png",
    "/images/figures/figure-4.png",
    "/images/figures/figure-5.png",
    "/images/figures/figure-6.png",
];

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <div className={styles.stage}>INTRODUCING XYNCRONIZED NETWORK</div>
                <div className={cn("h1", styles.title)}>
                    Community-owned API&nbsp;of blockchains.
                </div>
                <div className={styles.info}>
                    Xync delivers tamper-proof inputs, outputs, and computations
                    to support advanced smart contracts on any blockchain
                </div>
            </div>
            <div className={styles.images}>
                <div className={styles.image}>
                    <Image
                        src="/images/lines.svg"
                        width={1578}
                        height={1585}
                        alt="Lines"
                    />
                </div>
                {images.map((image, index) => (
                    <Parallax
                        className={styles.image}
                        speed={1}
                        easing="easeInQuad"
                        rotate={index === 2 ? [2, -10] : [-4, 15]}
                        key={index}
                    >
                        <Image src={image} fill alt="Figure" placeholder="blur" blurDataURL={image} />
                    </Parallax>
                ))}
            </div>
            <Scroll
                className={styles.scroll}
                title="SCROLL TO EXPLORE"
                onScroll={() =>
                    scrollToRef.current.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            />
        </div>
    </div>
);

export default Main;
