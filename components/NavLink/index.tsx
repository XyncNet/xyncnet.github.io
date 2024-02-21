import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

type NavLinkProps = {
    className?: string;
    activeClassName?: any;
    href: string;
    children: React.ReactNode;
};

const NavLink = ({
    className,
    activeClassName,
    href,
    children,
}: NavLinkProps) => {
    const router = useRouter();

    return (
        <Link href={href} className={cn(className, {
            [activeClassName]: router.pathname === href,
        })}>
            {children}
        </Link>
    );
};

export default NavLink;
