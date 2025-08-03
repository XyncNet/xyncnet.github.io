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
                        To receive and send money in any currency to any payment system around the world, you only need to:
                    </p>
                    <ul>
                        <li>Fully benefit from scalable network effects</li>
                        <li>Inherently more secure than all competitors</li>
                        <li>More open and powerful with 0.001% downtime</li>
                    </ul>
                </>,
                "ru": <>
                    <h2>Как начать</h2>
                    <p>
                        Что бы получать и отправлять деньги в любой валюте на любую платежную систему по всему миру, нужно лишь:
                    </p>
                    <ul>
                        <li>Зайти в нашего бота или веб-приложение</li>
                        <li>Пополнить баланс в любой валюте любым способом</li>
                        <li>Выбрать нужную валюту и платежную систему</li>
                        <li>Указать реквизиты получателя и срочность</li>
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
                    P2P transfer in the <Link href="https://t.me/XyncPayBot" target="_blank" className={styles.document}>bot</Link>, or directly by the one of payment providers
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
                    P2P переводом в <Link href="https://t.me/XyncPayBot" target="_blank" className={styles.document}>боте</Link>, либо напрямую через одного из платежных провайдеров
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
