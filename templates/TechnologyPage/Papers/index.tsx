import cn from "classnames";
import { papers } from "@/constants/papers";

type PapersProps = { t: any; locale: string };

const Papers = ({ t, locale }: PapersProps) => {
    const other = locale === "ru" ? "en" : "ru";
    const label = (l: string) => t(l === "ru" ? "papers.ru_label" : "papers.en_label");

    return (
        <div className="section">
            <div className="container">
                <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
                    <div className="h2" style={{ marginBottom: 16 }}>
                        {t("papers.title")}
                    </div>
                    <div style={{ color: "#777E90", fontSize: 18, lineHeight: 1.6 }}>
                        {t("papers.info")}
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 32,
                        justifyContent: "center",
                        marginTop: 56,
                    }}
                >
                    {papers.map((p, index) => (
                        <div
                            key={index}
                            style={{
                                flex: "1 1 340px",
                                maxWidth: 460,
                                padding: "32px 32px 36px",
                                borderRadius: 24,
                                border: "1px solid #E6E8EC",
                                borderTop: `4px solid ${p.color}`,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div className="h3" style={{ marginBottom: 12 }}>
                                {t("papers." + p.key)}
                            </div>
                            <div
                                style={{
                                    color: "#777E90",
                                    fontSize: 16,
                                    lineHeight: 1.6,
                                    marginBottom: 28,
                                    flexGrow: 1,
                                }}
                            >
                                {t("papers." + p.key + "_desc")}
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 20,
                                    flexWrap: "wrap",
                                }}
                            >
                                <a
                                    className={cn("button")}
                                    // @ts-ignore
                                    href={p.files[locale]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>{label(locale)} · PDF</span>
                                </a>
                                <a
                                    // @ts-ignore
                                    href={p.files[other]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#777E90",
                                        fontWeight: 600,
                                        borderBottom: "1px solid #B1B5C3",
                                        paddingBottom: 2,
                                    }}
                                >
                                    {label(other)} · PDF
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Papers;
