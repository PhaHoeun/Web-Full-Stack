import styles from './AboutPage.module.css';
import img1 from './images/Im-Yoon-Ah.jpg';
import img2 from './images/B-Rak.jpg';
import img3 from './images/B-Hany.jpg';

const AboutPage = () => {
    return (
        <>
            <div className={styles.section}>
                <h1>About Us</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <h2 style={{ textAlign: "center" }}>Our Teams</h2>

            <div className={styles.allCard}>
                <div className={styles.card}>
                    <img src={img1} alt="Jane" style={{ height: 300, width: "100%" }} />
                    <div className={styles.container}>
                        <h2>Im Yoon-Ah</h2>
                        <p className={styles.title}>CEO & Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button className={styles.button}>Contact</button></p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={img2} alt="B Rak" style={{ height: 300, width: "100%" }} />
                    <div className={styles.container}>
                        <h2>Lay Virak</h2>
                        <p className={styles.title}>Mobile Developer Team Lead</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>mike@example.com</p>
                        <p><button className={styles.button}>Contact</button></p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={img3} alt="B Hany" style={{ height: 300, width: "100%" }} />
                    <div className={styles.container}>
                        <h2>Sreng Hany</h2>
                        <p className={styles.title}>Mobile App Developer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button className={styles.button}>Contact</button></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
