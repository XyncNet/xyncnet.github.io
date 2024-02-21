import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Testimonial.module.sass";
import Image from "@/components/Image";

import { description, images } from "@/constants/testimonial";

type TestimonialProps = {};

const Testimonial = ({}: TestimonialProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.list}>
                {description.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={cn("h3", styles.subtitle)}>
                            {item.title}
                        </div>
                        <div className={styles.content}>{item.content}</div>
                    </div>
                ))}
            </div>
            <div className={styles.comment}>
                <div className={styles.details}>
                    <div className={cn("h2", styles.title)}>
                        “Xync accelerated our development process tenfold all
                        while maintaining security and integrity from production
                        to post launch”
                    </div>
                    <div className={styles.avatar}>
                        <Image
                            src="/images/avatar-2.jpg"
                            fill
                            style={{ objectFit: 'cover' }}
                            alt="Avatar"
                        />
                    </div>
                    <div className={styles.author}>Becky Stal</div>
                    <div className={styles.position}>
                        Sr. Engineer - FauxChain
                    </div>
                </div>
                <div className={styles.images}>
                    <div className={styles.image}>
                        <Image
                            src="/images/lines-2.svg"
                            fill
                            alt="Lines"
                        />
                    </div>
                    {images.map((image, index) => (
                        <Parallax
                            className={styles.image}
                            speed={1}
                            easing="easeInQuad"
                            rotate={[-4, 9]}
                            key={index}
                        >
                            <Image src={image} fill alt="Figure" />
                        </Parallax>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Testimonial;
