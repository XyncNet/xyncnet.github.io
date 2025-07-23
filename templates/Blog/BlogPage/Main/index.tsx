import Link from "next/link";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";

type MainProps = {t: any};

const Main = ({t}: MainProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.preview}>
                <Image
                    src="/images/blog-photo.jpg"
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="Blog"
                />
            </div>
            <div className={styles.wrap}>
                <div className={styles.stage}>Feature post</div>
                <div className={cn("h1", styles.title)}>
                    Everything Xync weekly report
                </div>
                <div className={styles.content}>
                    Xync delivers tamper-proof inputs, outputs, and computations
                    to support advanced smart contracts on any blockchain
                </div>
                <Link href="/blog/article" className={cn("button", styles.button)}>
                    <span>Read more</span>
                </Link>
            </div>
        </div>
        <div className={styles.lines}>
            <Image
                src="/images/lines-1.svg"
                width={2100}
                height={1950}
                alt="Lines"
            />
        </div>
    </div>
);

export default Main;
