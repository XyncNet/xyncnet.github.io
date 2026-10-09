import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./MailPage.module.sass";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Item from "@/templates/TechnologyPage/Faq/Item";

import { useTranslation } from "@/contexts/LanguageContext";

// Вход и регистрация ящика — в Xync Pay: виджет Telegram работает только на домене бота (pay.xync.net),
// поэтому все кнопки лендинга ведут на pay.xync.net/mail (вошёл → /settings/mail, иначе виджет входа).
const LOGIN_URL = "https://pay.xync.net/mail";
const BOT_URL = "https://t.me/XyncPayBot?startapp";

const NAMES = ["alex", "maria", "trader", "anna.k", "max", "crypto.pro"];
const COLORS = ["#54C310", "#EB5BE4", "#EBB15B", "#6F5BEB", "#54B3B0", "#54C310"];
const AVATARS = ["#EBB15B", "#54C310", "#54B3B0"];

// иконки возможностей (stroke, цвет — от карточки)
const ICONS = [
    "M4 6h16v12H4z M4 7l8 6 8-6",
    "M13 2 4 14h7l-1 8 9-12h-7z",
    "M16.5 6.5 8.4 14.6a2 2 0 0 0 2.8 2.8l8.1-8.1a4 4 0 0 0-5.7-5.7l-8.1 8.1a6 6 0 0 0 8.5 8.5L20 14",
    "M12 3 5 6v6c0 4.4 3 7.8 7 9 4-1.2 7-4.6 7-9V6z M9 12l2 2 4-4",
    "M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z M5 21v-2a7 7 0 0 1 14 0v2",
    "M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z M11 18h2",
];

// печатает имена по очереди: alex@xync.net → maria@xync.net → …
const useTyping = () => {
    const [text, setText] = useState("");
    useEffect(() => {
        let i = 0,
            pos = 0,
            del = false;
        let timer: ReturnType<typeof setTimeout>;
        const tick = () => {
            const w = NAMES[i % NAMES.length];
            pos += del ? -1 : 1;
            setText(w.slice(0, pos));
            let wait = del ? 45 : 95;
            if (!del && pos === w.length) [del, wait] = [true, 1600];
            else if (del && pos === 0) [del, i, wait] = [false, i + 1, 300];
            timer = setTimeout(tick, wait);
        };
        timer = setTimeout(tick, 400);
        return () => clearTimeout(timer);
    }, []);
    return text;
};

const TgIcon = () => (
    <svg className={styles.tg} viewBox="0 0 24 24" aria-hidden>
        <path d="M21.4 4.2 2.9 11.3c-1.3.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.4.8.9.8.4 0 .6-.2.9-.4l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.3-.5-1.9-1.4-1.5zM8.6 14l9-5.7c.4-.3.8-.1.5.2l-7.4 6.7-.3 3.2z"/>
    </svg>
);

const MailPage = () => {
    const { t, locale } = useTranslation();
    const typed = useTyping();
    const arr = (key: string): any[] => {
        const v = t(key);
        return Array.isArray(v) ? v : [];
    };

    const cta = (
        <div className={styles.cta}>
            <a className={cn("button", styles.button)} href={LOGIN_URL}>
                <span>
                    <TgIcon />
                    {t("mail.login")}
                </span>
            </a>
            <a className={styles.link} href={BOT_URL} target="_blank" rel="noopener noreferrer">
                {t("mail.open_bot")}
            </a>
        </div>
    );

    return (
        <Layout>
            {/* hero */}
            <div className={cn("section", styles.hero)}>
                <div className={styles.glow} />
                <div className={cn("container", styles.heroContainer)}>
                    <div className={styles.head}>
                        <h1 className={cn("h1", styles.title)}>
                            {locale === "ru" ? "Своя почта " : "Your own "}
                            <span className={styles.accent}>@xync.net</span>
                            {locale === "ru" ? " прямо в Telegram" : " email right in Telegram"}
                        </h1>
                        <div className={styles.info}>{t("mail.info")}</div>
                        {cta}
                        <div className={styles.note}>
                            {arr("mail.note").map((n: string) => (
                                <span key={n}>{n}</span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.mock} aria-hidden>
                        <div className={styles.claim}>
                            <b>{typed}</b>
                            <i className={styles.caret} />
                            <em>@xync.net</em>
                            <span className={styles.ok}>✓ {t("mail.free")}</span>
                        </div>
                        <div className={styles.list}>
                            {arr("mail.mails").map(([from, subj, time]: string[], i: number) => (
                                <div key={from} className={cn(styles.mail, { [styles.unread]: i === 0 })}>
                                    <div className={styles.ava} style={{ background: AVATARS[i] }}>
                                        {from[0]}
                                    </div>
                                    <div className={styles.mailBody}>
                                        <div className={styles.mailFrom}>{from}</div>
                                        <div className={styles.mailSubj}>{subj}</div>
                                    </div>
                                    <div className={styles.mailTime}>{time}</div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.toast}>
                            <span className={styles.toastIco}>📩</span>
                            <div>
                                <b>{t("mail.new_mail")}</b>
                                <small>Bybit · {arr("mail.mails")[0]?.[1]}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* цифры */}
            <div className={cn("section", styles.statsSection)}>
                <div className="container">
                    <div className={styles.stats}>
                        {arr("mail.stat").map(([v, l]: string[]) => (
                            <div className={styles.stat} key={l}>
                                <div className={cn("h3", styles.statValue)}>{v}</div>
                                <div className={styles.statTitle}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* возможности */}
            <div className="section">
                <div className="container">
                    <h4 className={styles.stage}>{t("mail.feat_stage")}</h4>
                    <h2 className={cn("h2", styles.h2)}>{t("mail.feat_title")}</h2>
                    <div className={styles.features}>
                        {arr("mail.features").map(([h, p]: string[], i: number) => (
                            <Card
                                className={styles.card}
                                innerCardClass={styles.cardInner}
                                color={COLORS[i]}
                                key={h}
                                animateIn="fadeInDown"
                                small
                            >
                                <svg
                                    className={styles.icon}
                                    viewBox="0 0 24 24"
                                    style={{ stroke: COLORS[i] }}
                                    aria-hidden
                                >
                                    <path d={ICONS[i]} />
                                </svg>
                                <div className={cn("h4", styles.cardTitle)}>{h}</div>
                                <div className={styles.cardText}>{p}</div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* шаги */}
            <div className="section">
                <div className="container">
                    <h4 className={styles.stage}>{t("mail.how_stage")}</h4>
                    <h2 className={cn("h2", styles.h2)}>{t("mail.how_title")}</h2>
                    <div className={styles.steps}>
                        {arr("mail.steps").map(([h, p]: string[], i: number) => (
                            <div className={styles.step} key={h}>
                                <div className={styles.stepNum}>0{i + 1}</div>
                                <div className={cn("h4", styles.cardTitle)}>{h}</div>
                                <div className={styles.cardText}>{p}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="section">
                <div className={cn("container", styles.faq)}>
                    <div className={cn("h2", styles.faqTitle)}>{t("mail.faq_title")}</div>
                    <div>
                        {arr("mail.faq").map(([q, a]: string[]) => (
                            <Item className={styles.faqItem} item={{ title: q, content: a }} key={q} />
                        ))}
                    </div>
                </div>
            </div>

            {/* финальный призыв */}
            <div className="section">
                <div className="container">
                    <div className={styles.final}>
                        <div className={cn("h2", styles.finalTitle)}>{t("mail.final_title")}</div>
                        <div className={styles.finalInfo}>{t("mail.final_info")}</div>
                        {cta}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MailPage;
