import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ContentView from "./components/ContentView";
import "./App.css";

function App() {
  const [selectedMenu, setSelectedMenu] = useState(null);

  return (
    <div className="app">
      <Sidebar
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />

      <main className="main">
        <div className="topbar">
          <button type="button">공유용 보기</button>
          <button type="button">Export</button>
          <div className="toggle">
            <span>Mode</span>
            <strong>Workspace</strong>
          </div>
        </div>

        <ContentView selectedMenu={selectedMenu} />
      </main>
    </div>
  );
}

export default App;