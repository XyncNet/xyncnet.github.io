import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";

import { faqs } from "@/constants/faqs";

type FaqProps = {t: any, locale: string};

const Faq = ({t, locale}: FaqProps) => (
    <div className={cn("section", styles.faq)}>
        <div className={cn("container", styles.container)}>
            <div className={cn("h2", styles.title)}>
                {t("faq_title")}
            </div>
            <div className={styles.list}>
                {faqs.map((x: any, index: number) => (
                    <Item
                        className={styles.item}
                        item={{ title: x.title[locale], content: x.content[locale] }}
                        key={index}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default Faq;
