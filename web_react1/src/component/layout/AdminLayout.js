
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
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
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
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
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
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onClickMenu}/>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
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