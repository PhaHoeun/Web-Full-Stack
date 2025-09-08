import styles from './AboutPage.module.css';
import img1 from '../../assets/images/Im-Yoon-Ah.jpg';
import rak from '../../assets/images/B-Rak.jpg';
import ny from '../../assets/images/B-Hany.jpg';
import nith from '../../assets/images/nith.jpg';
import ra from '../../assets/images/dara.jpg';


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
                    <img src={img1} alt="Jane" />
                    <div className={styles.container}>
                        <h2>Im Yoon-Ah</h2>
                        <p className={styles.title}>CEO & Founder</p>
                        <p className={styles.des}>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button className={styles.button}>Contact</button></p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={rak} alt="B Rak" />
                    <div className={styles.container}>
                        <h2>Lay Virak</h2>
                        <p className={styles.title}>Mobile Developer Team Lead</p>
                        <p className={styles.des}>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>mike@example.com</p>
                        <p><button className={styles.button}>Contact</button></p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={ny} alt="B Hany" />
                    <div className={styles.container}>
                        <h2>Sreng Hany</h2>
                        <p className={styles.title}>Mobile App Developer</p>
                        <p className={styles.des}>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button className={styles.button}>Contact</button></p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={nith} alt="Ah Nith" />
                    <div className={styles.container}>
                        <h2>Ah Nith</h2>
                        <p className={styles.title}>Mobile App Developer</p>
                        <p className={styles.des}>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button className={styles.button}>Contact</button></p>
                    </div>
                </div>
                
                <div className={styles.card}>
                    <img src={ra} alt="Ra Smach" />
                    <div className={styles.container}>
                        <h2>Ra Smach</h2>
                        <p className={styles.title}>Mobile App Developer</p>
                        <p className={styles.des}>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button className={styles.button}>Contact</button></p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AboutPage;
