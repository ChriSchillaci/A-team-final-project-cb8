import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Contact.module.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, email, telephone, message };

    try {
      const response = await fetch("/api/guest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setResponse("Message sent correctly!");
        router.push("/");
      } else {
        setResponse("Error sending message. Please try again later.");
        setTimeout(() => {
          setResponse("");
        }, 3000);
      }
    } catch (error) {
      setResponse(
        "A problem occurred while sending the message. Please try again later."
      );
      setTimeout(() => {
        setResponse("");
      }, 3000);
    }
  };

  return (
    <div className={styles.contact_container}>
      <div className={styles.contact}>
        <h2 className={styles.title}>Contact us</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="telephone">Telephone:</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              className={styles.inputMessage}
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
        <p>{response}</p>
      </div>
    </div>
  );
};
export default Contact;
