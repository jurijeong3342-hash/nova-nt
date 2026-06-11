import { useState } from "react";
import { menuItems } from "../data/menuData";

function Sidebar({ selectedMenu, setSelectedMenu }) {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuId) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  const renderMenu = (menus, depth = 0) => {
    return menus.map((menu) => {
      const hasChildren = menu.children && menu.children.length > 0;
      const isOpen = openMenus[menu.id];
      const isActive = selectedMenu?.id === menu.id;

      return (
        <div key={menu.id} className="menu-block">
          <button
            type="button"
            className={`menu-item depth-${depth} ${isActive ? "active" : ""}`}
            onClick={() => {
              if (hasChildren) {
                toggleMenu(menu.id);
                return;
              }

              setSelectedMenu(menu);
            }}
          >
            {hasChildren ? (
              <>
                <span className={`menu-arrow ${isOpen ? "open" : ""}`}>▶</span>
                <span className="menu-folder"></span>
              </>
            ) : (
              <span className="menu-dot"></span>
            )}

            <span className="menu-title">{menu.title}</span>

            {menu.count !== null && menu.count !== undefined && (
              <span className="menu-count">{menu.count}</span>
            )}
          </button>

          {hasChildren && isOpen && (
            <div className="submenu-list">
              {renderMenu(menu.children, depth + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">N</div>
        <div>
          <h1>SKT NOVA</h1>
          <p>Planning Workspace</p>
        </div>
      </div>

      <input className="search" placeholder="Search workspace" />

      <div className="workspace-group">
        <div className="workspace-title">
          <span className="arrow">▼</span>
          <span className="folder-icon">●</span>
          <strong>문서 작업실</strong>
          <em>6</em>
        </div>

        <div className="menu-list">{renderMenu(menuItems)}</div>
      </div>
    </aside>
  );
}

export default Sidebar;