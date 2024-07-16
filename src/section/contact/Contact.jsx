import styles from "./ContactStyles.module.css"


const Contact = () => {
    return (
        <section id="contact"
            className={styles.container}>
            <h1 className="sectionTitle">Contact</h1>
            <form action="">
                <div className={styles.formGroup}>
                    <label hidden htmlFor="name">Name</label>
                    <input type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label hidden htmlFor="email">Email</label>
                    <input type="email"
                        name="email"
                        id="email"
                        placeholder="email@example.com"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label hidden htmlFor="message">Message</label>
                    <textarea rows={10}
                        name="message"
                        id="message"
                        placeholder="Type here..."
                        required
                    ></textarea>
                </div>
                <button type="submit"
                className={styles.btn}>Submit</button>
            </form>
        </section>
    )
}


export default Contact