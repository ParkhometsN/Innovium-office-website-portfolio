import { useState } from "react";
import { Menu, Drawer, Button, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();

  return (
    <nav style={{ padding: "10px 20px", display: "flex", alignItems: "center" }}>
      {/* Логотип */}
      <div style={{ flex: 1, fontSize: "20px", fontWeight: "bold" }}>Мой сайт</div>

      {/* Обычное меню для больших экранов */}
      {screens.md && (
        <Menu mode="horizontal" style={{ flex: 1, justifyContent: "flex-end" }}>
          <Menu.Item key="home">Главная</Menu.Item>
          <Menu.Item key="about">О нас</Menu.Item>
          <Menu.Item key="contact">Контакты</Menu.Item>
        </Menu>
      )}

      {/* Кнопка бургер-меню для маленьких экранов */}
      {!screens.md && (
        <>
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: "24px" }} />}
            onClick={() => setOpen(true)}
          />
          <Drawer
            title="Меню"
            placement="right"
            onClose={() => setOpen(false)}
            open={open}
          >
            <Menu mode="vertical">
              <Menu.Item key="home">Главная</Menu.Item>
              <Menu.Item key="about">О нас</Menu.Item>
              <Menu.Item key="contact">Контакты</Menu.Item>
            </Menu>
          </Drawer>
        </>
      )}
    </nav>
  );
};

export default Navbar;
