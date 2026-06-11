import { useEffect, useState } from "react";
import RequirementCategory from "./RequirementCategory";
import StatusFlow from "./StatusFlow";

function ContentView({ selectedMenu }) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    setIsImageOpen(false);
  }, [selectedMenu]);

  if (!selectedMenu) {
    return (
      <section className="content">
        <p className="eyebrow">WORKSPACE</p>
        <h2>문서 작업실</h2>
        <p className="page-description">
          SKT NOVA 통합구축 프로젝트의 기획서 작성 워크스페이스를
          본사 공유용으로 정리한 화면입니다.
        </p>

        <div className="overview-grid">
          <div className="overview-card">
            <span>01</span>
            <h3>목적함수 및 KPI</h3>
            <p>프로젝트 목표와 핵심 성과 지표를 확인합니다.</p>
          </div>

          <div className="overview-card">
            <span>02</span>
            <h3>현황 분석</h3>
            <p>As-Is 채널 구조와 화면 흐름을 확인합니다.</p>
          </div>

          <div className="overview-card">
            <span>03</span>
            <h3>문제/기회 정의</h3>
            <p>현재 구조의 문제점과 개선 기회를 정리합니다.</p>
          </div>

          <div className="overview-card">
            <span>04</span>
            <h3>과제 정의</h3>
            <p>통합 구축을 위해 해결해야 할 과제를 확인합니다.</p>
          </div>

          <div className="overview-card">
            <span>05</span>
            <h3>요구사항</h3>
            <p>상세 요구사항과 반영 현황을 확인합니다.</p>
          </div>

          <div className="overview-card">
            <span>06</span>
            <h3>정책서</h3>
            <p>서비스 정책과 업무 기준을 확인합니다.</p>
          </div>
        </div>
      </section>
    );
  }

  if (selectedMenu.type === "custom") {
    if (selectedMenu.view === "requirement-category") {
      return <RequirementCategory selectedMenu={selectedMenu} />;
    }

    if (selectedMenu.view === "status-flow") {
      return <StatusFlow selectedMenu={selectedMenu} />;
    }

    return (
      <section className="content">
        <p className="eyebrow">CUSTOM</p>
        <h2>{selectedMenu.title}</h2>
        <p className="page-description">
          custom 화면이지만 연결된 view 값이 없습니다.
        </p>
      </section>
    );
  }

  return (
    <section className="content">
      <p className="eyebrow">WORKSPACE</p>
      <h2>{selectedMenu.title}</h2>
      <p className="page-description">
        {selectedMenu.description || "선택한 메뉴의 상세 화면입니다."}
      </p>

      <div className="detail-layout">
        <div className="summary-panel">
          <h3>공유용 요약</h3>

          {selectedMenu.notes && selectedMenu.notes.length > 0 ? (
            <ul>
              {selectedMenu.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          ) : (
            <p>해당 화면의 주요 내용을 캡처 기준으로 확인합니다.</p>
          )}
        </div>

        <div className="summary-panel">
          <h3>화면 유형</h3>
          <p>
            이 메뉴는 <strong>{selectedMenu.type}</strong> 유형으로 정리합니다.
          </p>
        </div>
      </div>

      {selectedMenu.image ? (
        <>
          <div className="capture-panel">
            <div className="capture-head">
              <h3>원본 화면 캡처</h3>
              <p>담당자가 전달한 워크스페이스 화면을 기준으로 확인합니다.</p>
            </div>

            <img
              src={selectedMenu.image}
              alt={`${selectedMenu.title} 화면 캡처`}
              onClick={() => setIsImageOpen(true)}
              className="capture-image"
            />
          </div>

          {isImageOpen && (
            <div className="image-modal" onClick={() => setIsImageOpen(false)}>
              <button
                type="button"
                className="image-modal-close"
                onClick={() => setIsImageOpen(false)}
              >
                ×
              </button>

              <img
                src={selectedMenu.image}
                alt={`${selectedMenu.title} 확대 화면`}
                className="image-modal-img"
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          )}
        </>
      ) : (
        <div className="empty-panel">
          <h3>{selectedMenu.title} 상세 화면 준비중</h3>
          <p>
            해당 메뉴의 캡처 이미지를 전달받으면 이 영역에 연결할 예정입니다.
          </p>
        </div>
      )}
    </section>
  );
}

export default ContentView;