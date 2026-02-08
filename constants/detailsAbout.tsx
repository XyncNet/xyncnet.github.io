import Link from "next/link";
import Image from "@/components/Image";
import styles from "@/templates/HomePage/AboutUs/AboutUs.module.sass";

export const details = [
    {
            image: {
                src: "/images/about-pic-1.png",
                width: 712,
                height: 712,
                alt: "Figure",
            },
            content: {
                "en": <>
                    <h2>How to start</h2>
                    <p>
                        To send and receive money in any currency to any payment system worldwide, just three steps:
                    </p>
                    <ul>
                        <li>Open <Link href="https://t.me/XyncPayBot?startapp" target="_blank" className={styles.document}>@XyncPayBot</Link> in Telegram</li>
                        <li>Top up your balance via bank transfer, Payeer, Volet or cryptocurrency</li>
                        <li>Choose the direction and amount — the system will do everything automatically</li>
                    </ul>
                </>,
                "ru": <>
                    <h2>Как начать</h2>
                    <p>
                        Чтобы отправлять и получать деньги в любой валюте на любую платёжную систему по всему миру, нужно всего три шага:
                    </p>
                    <ul>
                        <li>Откройте <Link href="https://t.me/XyncPayBot?startapp" target="_blank" className={styles.document}>@XyncPayBot</Link> в Telegram</li>
                        <li>Пополните баланс через банковский перевод, Payeer, Volet или криптовалюту</li>
                        <li>Выберите направление и сумму — система сделает всё автоматически</li>
                    </ul>
                </>
            },
    },
    {
        image: {
            src: "/images/about-pic-2.png",
            width: 712,
            height: 682,
            alt: "Figure",
        },
        content: {
            "en": <>
                <h2 id="top-up">How to top up your balance</h2>
                <p>
                    P2P transfer in the <Link href="https://t.me/XyncPayBot" target="_blank" className={styles.document}>bot</Link>, or directly through one of the payment providers. Xync commission — 0%.
                </p>
                <div>
                    <Link href="https://account.volet.com/referral/c3778593-4236-4e3a-8bde-216aef3bf724" target="_blank">
                        <Image
                            src="/images/pm/volet.svg"
                            width={206}
                            height={64}
                            alt="Xync"
                        />
                    </Link>
                    <Link href="https://payeer.com/038813323" target="_blank">
                        <Image
                            src="/images/pm/payeer.svg"
                            width={210}
                            height={43}
                            style={{marginTop: 14, marginLeft: 45}}
                            alt="Xync"
                        />
                    </Link>
                </div>
            </>,
            "ru": <>
                <h2 id="top-up">Как пополнить баланс</h2>
                <p>
                    P2P-переводом в <Link href="https://t.me/XyncPayBot" target="_blank" className={styles.document}>боте</Link>, либо напрямую через одного из платёжных провайдеров. Комиссия Xync — 0%.
                </p>
                <div>
                    <Link href="https://account.volet.com/referral/c3778593-4236-4e3a-8bde-216aef3bf724" target="_blank">
                        <Image
                            src="/images/pm/volet.svg"
                            width={103}
                            height={32}
                            alt="Xync"
                        />
                    </Link>
                    <Link href="https://payeer.com/038813323" target="_blank">
                        <Image
                            src="/images/pm/payeer.svg"
                            width={110}
                            height={23}
                            style={{marginTop: 6, marginLeft: 30}}
                            alt="Xync"
                        />
                    </Link>
                </div>
            </>
        }
    },
];
