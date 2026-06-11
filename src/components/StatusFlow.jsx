const flowChannels = [
  {
    id: "tworld",
    badge: "FLOW MAP",
    title: "T 월드",
    description:
      "개인 고객 중심의 조회, 변경, 가입, 납부, 고객지원 화면 흐름을 확인합니다.",
    url: "#",
  },
  {
    id: "membership",
    badge: "FLOW MAP",
    title: "T 멤버십",
    description:
      "멤버십 혜택, 리워드, 사용처, 등급·포인트 관련 화면 흐름을 확인합니다.",
    url: "#",
  },
  {
    id: "tdirect",
    badge: "FLOW MAP",
    title: "T 다이렉트",
    description:
      "상품 탐색, 주문, 가입, 배송, 개통 전후 고객 구매 여정을 확인합니다.",
    url: "#",
  },
  {
    id: "tuniverse",
    badge: "FLOW MAP",
    title: "T 우주",
    description:
      "구독 상품, 이용권, 혜택 관리, 해지·변경 관련 흐름을 확인합니다.",
    url: "https://www.figma.com/design/iqDSHAwsTJ4QgjPVq05Okk/T%EC%9A%B0%EC%A3%BC_FO_flowmap?node-id=0-1&p=f&t=8MKyGQADJW1jrelL-0",
  },
  {
    id: "tworldbiz",
    badge: "FLOW MAP",
    title: "T 월드 Biz",
    description:
      "법인·기업 고객의 회선, 요금, 청구, 관리 업무 흐름을 확인합니다.",
    url: "https://www.figma.com/design/SsO5rHMysYQD8wChWPGslE/BIZ_TW_As-Is_Flow-Map?node-id=47-53&t=8stgYI0kYkW1kFlu-1",
  },
];

const flowCheckPoints = [
  {
    number: "01",
    title: "진입 경로 비교",
    description:
      "채널별 시작점과 메뉴 깊이를 비교해 통합채널에서 단순화할 흐름을 찾습니다.",
  },
  {
    number: "02",
    title: "업무 완료 흐름 확인",
    description:
      "조회에서 신청, 결제, 변경, 사후관리까지 고객 과업이 끊기지 않는지 확인합니다.",
  },
  {
    number: "03",
    title: "정책서 연결 기준",
    description:
      "화면 단계가 아니라 고객 판단, 상태, 예외, BSS 연계 기준으로 정책서에 재구성합니다.",
  },
];

function StatusFlow({ selectedMenu }) {
  const openFigma = (url) => {
    if (!url || url === "#") {
      alert("Figma 링크가 아직 연결되지 않았습니다.");
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="content status-flow-page">
      <div className="status-hero">
        <p className="eyebrow">STATUS ANALYSIS</p>
        <h2>{selectedMenu?.title || "화면 Flow"}</h2>
        <p className="page-description">
          통합채널 설계를 위해 주요 As-Is 채널의 화면 흐름과 고객 과업 이동
          경로를 빠르게 확인하는 바로가기 화면입니다.
        </p>

        <div className="status-notice">
          각 박스는 Figma Flow Map으로 연결됩니다. 링크는 새 창에서 열리며,
          정책서·요구사항 보강 시 채널별 진입, 탐색, 신청, 결제, 사후관리
          흐름의 근거로 활용합니다.
        </div>
      </div>

      <div className="status-flow-board">
        <div className="status-board-head">
          <div>
            <h3>채널별 Flow Map 바로가기</h3>
            <p>
              채널별 화면 흐름을 확인하고 통합 대상, 중복 흐름, 고객 과업 완료
              지점을 비교합니다.
            </p>
          </div>
          <strong>{flowChannels.length}개 채널</strong>
        </div>

        <div className="flow-card-grid">
          {flowChannels.map((channel) => (
            <button
              type="button"
              className="flow-card"
              key={channel.id}
              onClick={() => openFigma(channel.url)}
            >
              <span>{channel.badge}</span>
              <h4>{channel.title}</h4>
              <p>{channel.description}</p>
              <em>Figma 열기</em>
            </button>
          ))}
        </div>
      </div>

      <div className="flow-point-grid">
        {flowCheckPoints.map((point) => (
          <article className="flow-point-card" key={point.number}>
            <strong>{point.number}</strong>
            <h4>{point.title}</h4>
            <p>{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StatusFlow;