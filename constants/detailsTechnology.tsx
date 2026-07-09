export const details = [
    {
        content: {
            en: (
                <>
                    <h2>Two lanes: a fastpath for money, a lazy DAG for the rest</h2>
                    <p>
                        A payment is a promise between one sender and one recipient —
                        it needs no global vote. Xync finalizes it the FastPay way:
                        the moment 2f+1 validators sign the transfer it becomes
                        irreversible, in about one network round-trip (~0.3 s).
                        Consensus is off the critical path, so latency does not grow
                        with load.
                    </p>
                    <p>
                        Everything many parties share — checkpoints, the validator set,
                        currency exchange — is ordered in the background by a lazy
                        Mysticeti-lite DAG (~1–2 s). Fast where speed matters, agreed
                        where agreement matters.
                    </p>
                </>
            ),
            ru: (
                <>
                    <h2>Две полосы: fastpath для денег, ленивый DAG для остального</h2>
                    <p>
                        Платёж — это обещание между одним отправителем и одним
                        получателем, глобальное голосование ему не нужно. Xync
                        финализирует его по-FastPay: как только перевод подписали
                        2f+1 валидатора, он необратим — это примерно один сетевой
                        круг (~0.3 с). Консенсус убран с критического пути, поэтому
                        задержка не растёт с нагрузкой.
                    </p>
                    <p>
                        Всё, что общее для многих — чекпоинты, набор валидаторов,
                        обмен валют — упорядочивает в фоне ленивый DAG (Mysticeti-lite,
                        ~1–2 с). Быстро там, где важна скорость; согласованно там, где
                        важно согласие.
                    </p>
                </>
            ),
        },
        image: "/images/technology-pic-1.png",
        color: "#E87A95",
    },
    {
        content: {
            en: (
                <>
                    <h2>80 bytes on the wire, history without the weight</h2>
                    <p>
                        A whole transfer is a 16-byte identifier plus an ed25519
                        signature — 80 bytes on the wire. The ledger keeps checkpoints,
                        not an endless log: a new node starts from a snapshot and a
                        short tail, not from genesis. An idle network costs zero bytes —
                        there are no empty blocks.
                    </p>
                    <ul>
                        <li>Security is BFT quorums plus fraud proofs, not trust</li>
                        <li>A double-spend attempt bans the sender, slashes the stake and rewards whoever caught it</li>
                        <li>Download the chain and verify every balance yourself</li>
                    </ul>
                </>
            ),
            ru: (
                <>
                    <h2>80 байт на проводе, история без лишнего веса</h2>
                    <p>
                        Весь перевод — это 16-байтный идентификатор плюс подпись
                        ed25519, то есть 80 байт на проводе. Реестр хранит чекпоинты,
                        а не бесконечный журнал: новая нода стартует со снапшота и
                        короткого хвоста, а не с генезиса. Простаивающая сеть стоит
                        ноль байт — пустых блоков нет.
                    </p>
                    <ul>
                        <li>Безопасность — это BFT-кворумы и fraud proofs, а не доверие</li>
                        <li>Попытка двойной траты банит отправителя, списывает стейк и награждает того, кто её поймал</li>
                        <li>Скачайте цепочку и проверьте каждый баланс сами</li>
                    </ul>
                </>
            ),
        },
        image: "/images/technology-pic-2.png",
        color: "#EBB15B",
    },
];
