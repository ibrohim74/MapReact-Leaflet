import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {NavLink, useLocation} from "react-router-dom";
import RouterS from "./routerS";
import React from "react";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Layouts extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            <NavLink to="/">Yaylov</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            <NavLink to="/leafletMap">LeafletMap</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<FileOutlined/>}>
                            <NavLink to="/reactMap">ReactMap</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<FileOutlined/>}>
                            <NavLink to="/leafletTest">LefletTest</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    {/*<Header className="site-layout-background" style={{ padding: 0 }} />*/}
                    <Content style={{ marginLeft: ' -21px', marginTop:'-21px', marginRight:'-21px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                           <RouterS/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Yaylov 1.2 </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Layouts