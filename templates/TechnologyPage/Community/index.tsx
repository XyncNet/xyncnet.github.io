import cn from "classnames";
import styles from "./Community.module.sass";
import Socials from "@/components/Socials";

import { socials } from "@/constants/socials";

type CommunityProps = {t: any};

const Community = ({t}: CommunityProps) => {
    const network = [
        { value: t("community.s1v"), content: t("community.s1t") },
        { value: t("community.s2v"), content: t("community.s2t") },
        { value: t("community.s3v"), content: t("community.s3t") },
    ];

    return (
    <div className={cn("section", styles.section)}>
        <div className={cn("container-large", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.row}>
                    <div className={styles.details}>
                        <div className={cn("h2", styles.title)}>
                            {t("community.title")}
                        </div>
                        <div className={styles.info}>
                            {t("community.info")}
                        </div>
                    </div>
                    <Socials
                        className={styles.socials}
                        socialClassName={styles.social}
                        socials={socials}
                        dark
                        large
                    />
                </div>
            </div>
            <div className={styles.list}>
                {network.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={cn("h2", styles.value)}>
                            {item.value}
                        </div>
                        <div className={styles.content}>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default Community;
