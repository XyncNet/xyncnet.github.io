import cn from "classnames";
import styles from "./Test.module.sass";

type TestProps = {};

const Test = ({}: TestProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}></div>
    </div>
);

export default Test;
