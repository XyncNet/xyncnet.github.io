import cn from "classnames";
import styles from "./Community.module.sass";
import Socials from "@/components/Socials";

import { socials } from "@/constants/socials";

const community = [
    {
        value: "$110M",
        content:
            "Stay current on the latest Xync project developments, news, and content, updated daily.",
    },
    {
        value: "90M+",
        content:
            "Stay current on the latest Xync project developments, news, and content, updated daily. Stay current on the latest Xync project developments, news, and content, updated daily.",
    },
    {
        value: "220K+",
        content:
            "Stay current on the latest Xync project developments, news, and content, updated daily.",
    },
];

type CommunityProps = {t: any};

const Community = ({t}: CommunityProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container-large", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.row}>
                    <div className={styles.details}>
                        <div className={cn("h2", styles.title)}>
                            Xync community
                        </div>
                        <div className={styles.info}>
                            Stay current on the latest Xync project.
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
                {community.map((item, index) => (
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

export default Community;
