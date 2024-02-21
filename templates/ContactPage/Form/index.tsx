import { useState } from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
import Field from "@/components/Field";

type FormProps = {};

const Form = ({}: FormProps) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return (
        <form
            className={styles.form}
            action=""
            onSubmit={() => console.log("Submit")}
        >
            <div className={cn("h3", styles.title)}>Need some help?</div>
            <div className={styles.fieldset}>
                <Field
                    className={styles.field}
                    placeholder="Name"
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                    required
                />
                <Field
                    className={styles.field}
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    required
                />
                <Field
                    className={styles.field}
                    placeholder="Tell us about your concern"
                    value={message}
                    onChange={(e: any) => setMessage(e.target.value)}
                    textarea
                    required
                />
            </div>
            <button className="button">
                <span>contact us</span>
            </button>
        </form>
    );
};

export default Form;
