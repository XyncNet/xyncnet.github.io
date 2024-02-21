import { AnimationOnScroll } from "react-animation-on-scroll";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Reviews.module.sass";
import Image from "@/components/Image";

type ReviewsType = {
    author: string;
    position: string;
    avatar: string;
    content: string;
    delay?: number;
};

type ReviewsProps = {
    reviews: ReviewsType[];
};

const Reviews = ({ reviews }: ReviewsProps) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    return (
        <div className={styles.section}>
            <div className={cn("container", styles.container)}>
                <div className={styles.list}>
                    {reviews.map((review, index) => (
                        <AnimationOnScroll
                            className={styles.item}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : review.delay}
                            key={index}
                            animateOnce
                        >
                            <div className={styles.content}>
                                “{review.content}”
                            </div>
                            <div className={styles.line}>
                                <div className={styles.avatar}>
                                    <Image
                                        src={review.avatar}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        alt="Avatar"
                                    />
                                </div>
                                <div className={styles.details}>
                                    <div className={styles.author}>
                                        {review.author}
                                    </div>
                                    <div className={styles.position}>
                                        {review.position}
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
