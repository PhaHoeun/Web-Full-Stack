
import { Outlet, Link, useNavigate } from "react-router-dom";
import styles from './MainLayout.module.css';
import { getIsLogin, getToken, getUser, logOut } from "../../util/service";

const AdminLayout = () => { //Outlet is property
    // const navigate = useNavigate();
    const user = getUser();

    if (!getIsLogin()) {
        window.location.href = '/login';
    }
    if (!user) {
        return null;
    }

    const onLogOut = () => {
        logOut();
    }

    return (
        <div >
            <div>
                <ul className={styles.menu} style={{ backgroundColor: 'grey', }}>
                    <li className={styles.logo}>
                    </li>
                    <li className={styles.item}><Link to="/admin" class="active">Dashboard</Link></li>
                    <li className={styles.item}><Link to="/admin/student">Student</Link></li>
                    <li className={styles.item}><Link to="/admin/about">About</Link></li>
                    <li className={styles.item}><a href="#" onClick={onLogOut} >Log Out</a></li>
                </ul>
                <br />
            </div>
            <div>
                <h1>Username: {user.username}</h1>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;