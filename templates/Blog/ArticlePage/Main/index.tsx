import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";

type MainProps = {t: any};

const Main = ({t}: MainProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.line}>
                    <div className={cn("status-green", styles.status)}>{t("updates")}</div>
                    <div className={cn("status-dark", styles.date)}>2 aug 2024</div>
                </div>
                <h1 className={cn("h1", styles.title)}>
                    Everything  weekly report
                </h1>
                <div className={cn("h4", styles.info)}>
                    Xync delivers tamper-proof inputs, outputs, and computations
                    to support advanced smart contracts on any blockchain
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
                <div className={styles.position}>Sr. Engineer - FauxChain</div>
            </div>
        </div>
        <div className={styles.lines}>
            <Image
                src="/images/lines-1.svg"
                width={2000}
                height={1900}
                alt="Lines"
            />
        </div>
    </div>
);

export default Main;
