import { useState } from "react";
import { requirementGuidelineRows } from "../data/reqGuidelineData";
import { reqDisplayRows } from "../data/reqDisplayData";
import { reqProductListRows } from "../data/reqProductListData";
import { reqBpRows } from "../data/reqBpData";
import { reqAiRows } from "../data/reqAiData";
import { reqRecommendRows } from "../data/reqRecommendData";
import { reqTrackingRows } from "../data/reqTrackingData";
import { reqEventMissionRows } from "../data/reqEventMissionData";
import { reqExternalCouponRows } from "../data/reqExternalCouponData";
import { reqMembershipPointRows } from "../data/reqMembershipPointData";
import { reqProductDetailRows } from "../data/reqProductDetailData";
import { reqCartRows } from "../data/reqCartData";
import { reqPromotionRows } from "../data/reqPromotionData";
import { reqOrderRows } from "../data/reqOrderData";
import { reqGiftOrderRows } from "../data/reqGiftOrderData";
import { reqProductChangeRows } from "../data/reqProductChangeData";
import { reqPaymentRows } from "../data/reqPaymentData";
import { reqOrderAftercareRows } from "../data/reqOrderAftercareData";
import { reqCancelRefundRows } from "../data/reqCancelRefundData";
import { reqMyJoinInfoRows } from "../data/reqMyJoinInfoData";
import { reqLineChangeManageRows } from "../data/reqLineChangeManageData";
import { reqMembershipCardRows } from "../data/reqMembershipCardData";
import { reqBillingPaymentRows } from "../data/reqBillingPaymentData";
import { reqMyDataCallRows } from "../data/reqMyDataCallData";
import { reqBenefitShareRows } from "../data/reqBenefitShareData";
import { reqCouponAuthRows } from "../data/reqCouponAuthData";
import { reqSignupWithdrawalRows } from "../data/reqSignupWithdrawalData";
import { reqMemberInfoRows } from "../data/reqMemberInfoData";
import { reqNotificationRows } from "../data/reqNotificationData";
import { reqTermsRows } from "../data/reqTermsData";
import { reqSettingRows } from "../data/reqSettingData";
import { reqCustomerHubRows } from "../data/reqCustomerHubData";
import { reqCustomerFaqNoticeRows } from "../data/reqCustomerFaqNoticeData";
import { reqCustomerStoreRows } from "../data/reqCustomerStoreData";

function RequirementCategory({ selectedMenu }) {
  const [selectedMapping, setSelectedMapping] = useState(null);

  const requirementDataMap = {
    "req-guideline-quality-apply": requirementGuidelineRows,
    "req-display-manage": reqDisplayRows,
    "req-product-list": reqProductListRows,
    "req-bp-service": reqBpRows,
    "req-ai-agent": reqAiRows,
    "req-recommend": reqRecommendRows,
    "req-data-tracking": reqTrackingRows,
    "req-event-mission": reqEventMissionRows,
    "req-external-coupon": reqExternalCouponRows,
    "req-membership-point": reqMembershipPointRows,
    "req-product-detail": reqProductDetailRows,
    "req-cart": reqCartRows,
    "req-promotion": reqPromotionRows,
    "req-order-contract-join": reqOrderRows,
    "req-gift-order": reqGiftOrderRows,
    "req-product-change": reqProductChangeRows,
    "req-payment": reqPaymentRows,
    "req-order-aftercare": reqOrderAftercareRows,
    "req-cancel-refund": reqCancelRefundRows,
    "req-my-join-info": reqMyJoinInfoRows,
    "req-line-change-manage": reqLineChangeManageRows,
    "req-membership-card": reqMembershipCardRows,
    "req-billing-payment": reqBillingPaymentRows,
    "req-my-data-call": reqMyDataCallRows,
    "req-benefit-share": reqBenefitShareRows,
    "req-coupon-auth": reqCouponAuthRows,
    "req-signup-withdrawal": reqSignupWithdrawalRows,
    "req-member-info": reqMemberInfoRows,
    "req-notification": reqNotificationRows,
    "req-terms": reqTermsRows,
    "req-setting": reqSettingRows,
    "req-customer-hub": reqCustomerHubRows,
    "req-customer-faq-notice": reqCustomerFaqNoticeRows,
    "req-customer-store": reqCustomerStoreRows,
    
  };

const menuId = selectedMenu?.id;
const menuTitle = selectedMenu?.title || "요구사항";
const menuCount = selectedMenu?.count || 0;

const requirementRows = menuId ? requirementDataMap[menuId] || [] : [];
const currentMapping = selectedMapping || requirementRows[0];

  if (requirementRows.length === 0) {
    return (
      <section className="content requirement-page">
        <p className="eyebrow">WORKSPACE</p>
        <h2>문서 작업실</h2>

        <div className="requirement-board">
          <div className="requirement-board-head">
            <div>
              <h3>{menuTitle} 요구사항</h3>
              <div className="requirement-meta">
                <span className="type-pill">간소화</span>
                <span>연결된 요구사항 데이터가 없습니다.</span>
              </div>
            </div>
          </div>

          <div className="empty-panel">
            <h3>데이터 연결 필요</h3>
            <p>
              현재 메뉴 ID <strong>{menuId || "없음"}</strong>에 연결된 데이터가
              없습니다.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="content requirement-page">
      <p className="eyebrow">WORKSPACE</p>
      <h2>문서 작업실</h2>

      <div className="requirement-board">
        <div className="requirement-board-head">
          <div>
            <h3>{selectedMenu.title} 요구사항</h3>
            <div className="requirement-meta">
              <span className="type-pill">간소화</span>
              <span>
                상위 요구사항 24건 · 상세 요구사항 {menuCount}건
              </span>
            </div>
          </div>
        </div>

        <div className="requirement-table-wrap">
          <table className="requirement-list-table">
            <colgroup>
              <col className="col-id" />
              <col className="col-name" />
              <col className="col-desc" />
              <col className="col-type" />
              <col className="col-priority" />
              <col className="col-source" />
              <col className="col-mapping" />
            </colgroup>

            <thead>
              <tr>
                <th>요구사항 ID</th>
                <th>요구사항 명</th>
                <th>요구사항 설명</th>
                <th>유형</th>
                <th>우선순위</th>
                <th>출처</th>
                <th>맵핑</th>
              </tr>
            </thead>

            <tbody>
              {requirementRows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <button type="button" className="req-id-button">
                      {row.id}
                    </button>
                  </td>
                  <td className="req-name">{row.name}</td>
                  <td className="req-desc">{row.description}</td>
                  <td>{row.type}</td>
                  <td>{row.priority}</td>
                  <td>{row.source}</td>
                  <td>
                    <button
                      type="button"
                      className="mapping-card"
                      onClick={() => setSelectedMapping(row)}
                    >
                      <span>{row.mappingStatus}</span>
                      <strong>{row.mappingTitle}</strong>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedMapping && currentMapping && (
        <div className="mapping-overlay" onClick={() => setSelectedMapping(null)}>
          <aside
            className="mapping-drawer"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="mapping-close"
              onClick={() => setSelectedMapping(null)}
            >
              ×
            </button>

            <p className="drawer-eyebrow">MAPPING DETAIL</p>
            <h3>{currentMapping.name}</h3>

            <div className="drawer-section">
              <h4>요구사항</h4>
              <p className="drawer-id">{currentMapping.id}</p>
              <p>{currentMapping.description}</p>
            </div>

            <div className="drawer-section">
              <h4>반영 상태</h4>
              <p>반영 완료 · {currentMapping.mappingTitle}</p>
            </div>

            <div className="drawer-section">
              <h4>바로가기</h4>

              <div className="mapping-link-list">
                {(currentMapping.mappingLinks || []).map((link, index) => (
                  <div className="mapping-link-card" key={index}>
                    <strong>{link.title}</strong>
                    <p>{link.description}</p>
                    <button type="button">바로가기</button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}

export default RequirementCategory;
