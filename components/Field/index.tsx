import cn from "classnames";
import styles from "./Field.module.sass";

type FieldProps = {
    className?: string;
    textarea?: boolean;
    type?: string;
    value: string;
    onChange: any;
    placeholder?: string;
    required?: boolean;
    children?: any;
    autoFocus?: any;
};

const Field = ({
    className,
    textarea,
    type,
    value,
    onChange,
    placeholder,
    required,
    autoFocus,
}: FieldProps) => (
    <div
        className={cn(
            styles.field,
            { [styles.fieldTextarea]: textarea },
            className
        )}
    >
        <div className={styles.wrap}>
            {textarea ? (
                <textarea
                    className={styles.textarea}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    autoFocus={autoFocus}
                ></textarea>
            ) : (
                <input
                    className={styles.input}
                    type={type || "text"}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    autoFocus={autoFocus}
                />
            )}
        </div>
    </div>
);

export default Field;
