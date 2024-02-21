import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.sass";
import Image from "@/components/Image";

type LogoProps = {
    className?: string;
    onClick?: () => void;
};

const Logo = ({ className, onClick }: LogoProps) => (
    <Link href="/" className={cn(styles.logo, className)} onClick={onClick} as="/">
        <Image
            src="/images/logo.svg"
            width={38}
            height={45}
            alt="Xync"
        />
    </Link>
);

export default Logo;
