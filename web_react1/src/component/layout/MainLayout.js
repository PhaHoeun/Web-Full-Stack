
import { Outlet, Link, useNavigate } from "react-router-dom";
import styles from './MainLayout.module.css';

const MainLayout = () => { //Outlet is property

    const navigate = useNavigate();

    const onClickBtn1 = () => {
        // window.location.href = '/about'; // but reload page
        navigate('/about'); // react way, single page application
    };

    return (
        <div >
            <div>

                <ul className={styles.menu}>
                    <li className={styles.logo}>
                        <Link to="/">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/024/553/534/small_2x/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png"
                                alt="Brand logo"
                                style={{ height: 60, marginLeft: 50, marginRight: 0 }}
                            />
                        </Link>
                    </li>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/student">Student</Link></li>
                    <li className={styles.item}><Link to="/about">About</Link></li>
                </ul>
                <br />
                {/* <button onClick={onClickBtn1}>
                    Link to About Page
                </button> */}
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;