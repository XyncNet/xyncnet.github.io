import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import styles from "./Logo.module.sass";
import Image from "@/components/Image";

type LogoProps = {
    className?: string;
    onClick?: () => void;
};

// на странице почты (/mail) вместо «XYNC PAY» — «XYNC MAIL»: вордмарк + плашка в стиле кнопки APP (.button)
const Logo = ({ className, onClick }: LogoProps) => {
    const { pathname } = useRouter();

    return (
        <Link href="/" className={cn(styles.logo, className)} onClick={onClick} as="/">
            {pathname === "/mail" ? (
                <>
                    <Image src="/images/xync-white.svg" width={146} height={37} alt="Xync" />
                    <span className={styles.badge}>
                        <span className="button">
                            <span>mail</span>
                        </span>
                    </span>
                </>
            ) : (
                <Image src="/images/logo.png" width={206} height={64} alt="Xync" />
            )}
        </Link>
    );
};

export default Logo;
