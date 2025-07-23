import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Scroll from "@/components/Scroll";
import Image from "@/components/Image";

type MainProps = {
    scrollToRef: any;
    t: any;
};

const Main = ({ scrollToRef, t }: MainProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.stage}>{t("contact_us")}</div>
                <div className={cn("h1", styles.title)}>{t("lets_chat")}</div>
                <div className={styles.info}>{t("contact_info")}</div>
                <Scroll
                    className={styles.scroll}
                    mouseClassName={styles.mouse}
                    title={t("scroll_contact")}
                    onScroll={() => scrollToRef.current.scrollIntoView({behavior: "smooth"})}
                    row
                />
            </div>
        </div>
        <div className={styles.images}>
            <div className={styles.image}>
                <Image src="/images/lines-1.svg" fill alt="Lines" />
            </div>
            <Parallax
                className={styles.image}
                speed={1}
                easing="easeInQuad"
                rotate={[2, -10]}
            >
                <Image
                    src="/images/figures/figure-3.png"
                    fill
                    alt="Figure"
                />
            </Parallax>
        </div>
    </div>
);

export default Main;
