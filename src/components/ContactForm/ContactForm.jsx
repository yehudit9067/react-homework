import { useState } from "react";

function ContactForm() {
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false);
    const maxLength = 100;

    const remaining = maxLength - message.length;

    const handleSend = () => setIsSent(true);

    const handleReset = () => {
        setMessage("");
        setIsSent(false);
    };

    return (
        <div className="contact-form">
            {isSent ? (
                <div className="form-success">
                    <p>ההודעה נשלחה, תודה!</p>
                    <button type="button" onClick={handleReset}>
                        שליחת הודעה חדשה
                    </button>
                </div>
            ) : (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSend();
                    }}
                >
                    <textarea
                        placeholder="הכנס הודעה"
                        value={message}
                        onChange={(e) =>
                            setMessage(e.target.value.slice(0, maxLength))
                        }
                    />
                    <p className={remaining <= 10 ? "counter low" : "counter"}>
                        {remaining === 1
                            ? "נשאר תו אחד"
                            : `נשארו ${remaining} תווים`}
                    </p>
                    <button
                        type="submit"
                        disabled={message.trim() === ""}
                    >
                        שלח
                    </button>
                </form>
            )}
        </div>
    );
}
export default ContactForm;
