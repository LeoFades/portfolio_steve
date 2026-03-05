import styles from "./Interests.module.css";

function Interests() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Personal Interests</h2>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <img
                            className={styles.image}
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSzHM-ygSDjjPJV6PzxaHgCvGrwcV5DBLOOPGse1fZS6A_B2ITH5vuq8r6WjI_EBzdM29YsnUwtdjK_QvhAXPYlS9kVXNOodaZPJgY0J9Z3pQFDrU4CboAFMeATJYChGk3PmlRL0-wNmhw3Tx7ipoz3pNKh_Ww04RxL_PFF1yBm_O-dHMEh2W4rLP4npNI6QcBUgSyIsKbhA8iL0GSVKaqn5P3wpZmvfGpvVNnyVKMCb2fE7SPNehP44d1gIVEMuxVfi9TBUI5EZ0"
                            alt="Culinary Arts"
                        />

                        <div className={styles.overlay}>
                            <h6 className={styles.text}>
                                <span className="material-symbols-outlined">restaurant</span>
                                Culinary Arts & Fusion Food
                            </h6>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img
                            className={styles.image}
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU5up0MJ_8wsoWSM9b6Y4-gKZRH4yufeG02S91rp69bXVSXcC6IyKKKrLJHA99i4Kt4sCHFIgF30bLf6IECcmUb9Z9u8BzxZ-AKR-oeJUftgb_NZf_yDkuUolj7ob4BDZGUk-9c5m2znThpkt62ds1XLp2bb1jMOD3xyiShkaX4lfmSYNXE0rqvVBHVyg0WreLuUPgYE2wTFUJgW0jnXLrxJ0nX55XNFpZeEO1OAT49AGnP5BZI63e2SRmrvelhkLYQbjADe5jq00"
                            alt="Hiking"
                        />

                        <div className={styles.overlay}>
                            <h6 className={styles.text}>
                                <span className="material-symbols-outlined">landscape</span>
                                High-Altitude Hiking
                            </h6>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Interests;