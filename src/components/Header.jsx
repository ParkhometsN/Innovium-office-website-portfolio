import { useState } from "react";
import './styles/Header.css';
import { MenuOutlined } from "@ant-design/icons";
import { Menu, Drawer, Button, Grid, Layout, Row, Col } from "antd";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const AppHeader = () => {
    const [open, setOpen] = useState(false);
    const screens = useBreakpoint();

    return (
        <Header className="header">
            <div className="container">
                <Row justify='space-between' align="middle">    
                    <Col span={9}>
                        <div className="logo">
                            <span className="sercle"></span>
                            <h2 style={{fontWeight: 300}}>Innovium Office</h2>
                        </div>
                    </Col>
                    {screens.md && (
                        <Col span={4}>
                            <nav className="navigation">   
                                <ul className="navigation_items">
                                    <li><a href="#price">Услуги</a></li>
                                    <li><a href="#keyses">Кейсы</a></li>
                                    <li><a href="#backanswer">Связаться</a></li>
                                </ul>
                            </nav>
                        </Col>
                    )}
                    {/* <Col span={screens.md ? 4 : 16} style={{ display: 'flex', justifyContent: screens.md ? 'flex-end' : 'center' }}>
                        <div className="presentation_butt">
                            <button>презентация</button>
                        </div>
                    </Col> */}
                    {!screens.md && (
                        <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                className="burger-button"
                                type="text"
                                icon={<MenuOutlined style={{ fontSize: "24px", color: '#ADEAA2' }} />}
                                onClick={() => setOpen(true)}
                            />
                            <Drawer onClose={() => setOpen(false)} open={open}>
    <Menu className="open_menu_burger" mode="vertical">
        <Menu.Item key="price">
            <a href="#price" onClick={() => setOpen(false)}>Услуги</a>
        </Menu.Item>
        <Menu.Item key="keyses">
            <a href="#keyses" onClick={() => setOpen(false)}>Кейсы</a>
        </Menu.Item>
        <Menu.Item key="backanswer">
            <a href="#backanswer" onClick={() => setOpen(false)}>Связаться</a>
        </Menu.Item>
    </Menu>
</Drawer>

                        </Col>
                    )}
                </Row>
            </div>
        </Header>
    ) 
};

export default AppHeader;