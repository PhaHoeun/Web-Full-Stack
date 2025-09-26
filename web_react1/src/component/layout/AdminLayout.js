
// import { Outlet, Link, useNavigate } from "react-router-dom";
// import styles from './MainLayout.module.css';
// import { getIsLogin, getToken, getUser, logOut } from "../../util/service";

// const AdminLayout = () => { //Outlet is property
//     // const navigate = useNavigate();
//     const user = getUser();

//     if (!getIsLogin()) {
//         window.location.href = '/login';
//     }
//     if (!user) {
//         return null;
//     }

//     const onLogOut = () => {
//         logOut();
//     }

//     return (
//         <div >
//             <div>
//                 <ul className={styles.menu} style={{ backgroundColor: 'grey', }}>
//                     <li className={styles.logo}>
//                     </li>
//                     <li className={styles.item}><Link to="/admin" class="active">Dashboard</Link></li>
//                     <li className={styles.item}><Link to="/admin/student">Student</Link></li>
//                     <li className={styles.item}><Link to="/admin/about">About</Link></li>
//                     <li className={styles.item}><a href="#" onClick={onLogOut} >Log Out</a></li>
//                 </ul>
//                 <br />
//             </div>
//             <div>
//                 <h1>Username: {user.username}</h1>
//                 <Outlet />
//             </div>
//         </div>
//     );
// };

// export default AdminLayout;



import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Dropdown, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './AdminLayout.module.css';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const itemsMenu = [
    getItem('Dashboard', '/admin', <PieChartOutlined />),
    getItem('Teacher', '/admin/teacher', <DesktopOutlined />),
    getItem('Student', '/admin/student', <UserOutlined />
        // ,
        // [
        // getItem('Tom', '3'),
        // getItem('Bill', '4'),
        // getItem('Alex', '5'),
        // ]
    ),
    getItem('Team', 'sub2', <TeamOutlined />),
    getItem('Files', '9', <FileOutlined />),
];

const items = [
    {
        key: '1',
        label: 'Profile',
        icon: <UserOutlined />,
    },
    {
        key: '',
        label: 'Change Password',
        icon: <DesktopOutlined />,
    },
    {
        key: 'logout',
        label: 'Log Out',
        icon: <PieChartOutlined />,
        danger: true,
    },
];


const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    const onClickMenu = (param) => {
        console.log('click ', param);
        navigate(param.key);
    };

    const navigate = useNavigate();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={itemsMenu} onClick={onClickMenu} />
            </Sider>
            <Layout>
                {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
                <div className={styles.headerContainer}>
                    <div className={styles.headerG1}>
                        <div className={styles.logo}>
                            <div style={{color: 'white'}}>HP</div>
                        </div>
                        <div>
                            <div className={styles.brandName}>Hoeun Pha</div>
                            <div className={styles.subBrandName}>Build IT Skill</div>
                        </div>
                    </div>
                    <div className={styles.headerG2}>
                        {/* <div className={styles.userImage}> */}
                            <div>
                            <img className={styles.userImage} src={require("../../assets/images/Im-Yoon-Ah.jpg")} alt='user'/>
                            </div>
                        {/* </div> */}
                        <Dropdown
                            menu={{ items }}
                        >
                            <div>
                                <div className={styles.username} >Admin</div>
                                <div className={styles.roleName}>Mobile App Developer</div>
                            </div>
                        </Dropdown>
                    </div>

                </div>
                <Content style={{ margin: '10px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'Bill' }]} /> */}
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default AdminLayout;