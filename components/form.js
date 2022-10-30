import LoginUser from "../helpers/auth";
import React from "react";
import styles from "../styles/FormStyle.module.css";

function Form() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const iName = event.target.name.value;
        const iEmail = event.target.email.value;
        const iConfirmemail = event.target.confirmemail.value;

        if (iEmail !== iConfirmemail) {
            alert("Emails do not match");
        } else if (iName.length < 3) {
            alert("Full name needs to be at least 3 characters long");
        } else {
            let data = {
                name: iName,
                email: iEmail,
            };
            LoginUser(data);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.mainF}>
            <div>
                <div className={styles.forminput}>
                    <input id="name" placeholder="Full name" />
                </div>
                <div className={styles.forminput}>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email address"
                    />
                </div>
                <div className={styles.forminput}>
                    <input
                        type="email"
                        id="confirmemail"
                        placeholder="Confirm email address"
                    />
                </div>
                <div className={styles.forminput}>
                    <button className={styles.buttonstyle} type="submit">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}
export default Form;
