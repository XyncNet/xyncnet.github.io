export const faqs = [
    {
        title: {
            en: "Do I need an account on a P2P exchange?",
            ru: "Нужен ли аккаунт на P2P-бирже?",
        },
        content: {
            en: "No. Xync Pay handles all interactions with P2P platforms on its own. You just specify the amount and direction of the transfer — the system finds the best offer and executes the trade through Xync agents.",
            ru: "Нет. Xync Pay сам берёт на себя всё взаимодействие с P2P-площадками. Вы указываете только сумму и направление перевода — система находит лучшее предложение и проводит сделку через агентов Xync.",
        },
    },
    {
        title: {
            en: "What is the commission?",
            ru: "Какая комиссия?",
        },
        content: {
            en: "Xync charges 0% on the free lane. The only possible fee is the external payment system's own commission (for example, a bank transfer fee), which is always known in advance.",
            ru: "Xync берёт 0% на бесплатной полосе. Единственная возможная плата — собственная комиссия внешней платёжной системы (например, банка за перевод), и она всегда известна заранее.",
        },
    },
    {
        title: {
            en: "How fast is it?",
            ru: "Насколько это быстро?",
        },
        content: {
            en: "A payment inside the network is final in about 0.3 seconds — the time it takes 2f+1 validators to sign it, roughly one network round-trip. A cross-border transfer through an external payment system takes about a minute on average.",
            ru: "Платёж внутри сети становится окончательным примерно за 0.3 секунды — за время, пока его подпишут 2f+1 валидатора, то есть примерно один сетевой круг. Трансграничный перевод через внешнюю платёжную систему занимает в среднем около минуты.",
        },
    },
    {
        title: {
            en: "Is it safe?",
            ru: "Это безопасно?",
        },
        content: {
            en: "Every transfer is a cryptographically signed record on the Xync Network L1. Finality rests on BFT quorums, not trust; a double-spend attempt is caught by fraud proofs, which ban the sender, slash their stake and reward whoever caught it. External P2P deals also go through the exchange's escrow.",
            ru: "Каждый перевод — это криптографически подписанная запись в Xync Network L1. Финальность держится на BFT-кворумах, а не на доверии; попытку двойной траты ловят fraud proofs, которые банят отправителя, списывают его стейк и награждают поймавшего. Внешние P2P-сделки дополнительно идут через эскроу биржи.",
        },
    },
    {
        title: {
            en: "What currencies are supported?",
            ru: "Какие валюты поддерживаются?",
        },
        content: {
            en: "145+ fiat currencies through 1500+ payment systems in 196 countries, plus 23+ cryptocurrencies. Inside the network up to 255 currencies are exchanged directly — atomic swaps, liquidity pools and fiat staking.",
            ru: "145+ фиатных валют через 1500+ платёжных систем в 196 странах и 23+ криптовалюты. Внутри сети напрямую обмениваются до 255 валют — атомарные свопы, пулы ликвидности и фиатный стейкинг.",
        },
    },
    {
        title: {
            en: "Does it work offline?",
            ru: "Работает ли это оффлайн?",
        },
        content: {
            en: "Yes. Two phones exchange signed QR codes with no internet — each device stores a private key and the server's public key, so a signature can be verified without a connection. Going online is only needed to open and to close the deal.",
            ru: "Да. Два телефона обмениваются подписанными QR-кодами без интернета — на каждом устройстве хранятся приватный ключ и публичный ключ сервера, поэтому подпись проверяется без соединения. Интернет нужен только чтобы открыть и закрыть сделку.",
        },
    },
    {
        title: {
            en: "Can Xync be a free escrow agent?",
            ru: "Может ли Xync быть бесплатным гарантом сделки?",
        },
        content: {
            en: "Yes. Open a pool of three — buyer, seller and a guarantor — where any two signatures are a majority. The buyer freezes the price, the seller freezes a bond, the guarantor freezes nothing. An honest deal is signed by the two sides alone; in a dispute the guarantor signs with whoever is right. The guarantor can never steal alone — he'd need a second signature from the very party he set out to rob, and the money stays locked in L1, not in his hands.",
            ru: "Да. Соберите пул из троих — покупатель, продавец и гарант — где любые две подписи составляют большинство. Покупатель замораживает цену, продавец — залог, гарант не замораживает ничего. Честную сделку подписывают две стороны сами; в споре гарант подписывает вместе с тем, кто прав. Украсть в одиночку гарант не может — ему нужна вторая подпись как раз от той стороны, которую он собрался обокрасть, а деньги всё время заморожены в L1, а не лежат у него.",
        },
    },
];
