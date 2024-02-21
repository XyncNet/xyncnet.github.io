import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Details.module.sass";
import Image from "@/components/Image";
import Item from "./Item";

import { details } from "@/constants/detailsTechnology";

type DetailsProps = {
    scrollToRef: any;
};

const Details = ({ scrollToRef }: DetailsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("anchor", styles.anchor)} ref={scrollToRef}></div>
        <div className={cn("container", styles.container)}>
            <div className={styles.list}>
                {details.map((x, index) => (
                    <Item
                        className={styles.item}
                        itemWrapClass={styles.wrap}
                        item={x}
                        key={index}
                    />
                ))}
            </div>
        </div>
        <Parallax
            className={styles.image}
            speed={1}
            easing="easeInQuad"
            rotate={[2, 15]}
        >
            <Image
                src="/images/figures/figure-9.png"
                width={527}
                height={527}
                alt="Figure"
            />
        </Parallax>
    </div>
);

export default Details;
