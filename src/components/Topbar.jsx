function Topbar() {
  return (
    <header className="topbar">
      <button>정주리님</button>
      <button>로그아웃</button>
      <div className="toggle">
        <span>LLM 사용 여부</span>
        <strong>사용</strong>
      </div>
      <button>Feedback</button>
      <button>AI 답변검토</button>
      <button>서비스 관리</button>
    </header>
  );
}

export default Topbar;