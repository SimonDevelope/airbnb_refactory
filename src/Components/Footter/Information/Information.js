import React from 'react';
import './Information.css';
import Policy from '../Policy/Policy';

function Info() {
  return (
    <div className="Info-all-total-wrapper">
      <div className="Info-inner-partition">
        <div className="Info-list-area-wrapper">
          <ul className="Info-list-wrapper">
            <li className="Info-title-common-list-attr">소개</li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>에어비앤비 이용 방법</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>뉴스룸</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>투자자 정보</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>에어비앤비 플러스</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>에어비앤비 Luxe</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>호텔투나잇</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>에어비앤비 비즈니스 프로그램</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>호스트 분들이 있기에 가능합니다</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>채용정보</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>창립자 편지</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="Info-list-wrapper">
            <li className="Info-title-common-list-attr">커뮤니티</li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>다양성 및 소속감</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>접근성</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>에어비앤비 어소시에이트</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>구호 인력을 위한 숙소</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>게스트 추천</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>Airbnb.org</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="Info-list-wrapper">
            <li className="Info-title-common-list-attr">호스팅하기</li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>숙소 호스팅</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>온라인 체험 호스팅하기</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>체험 호스팅하기</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>책임감 있는 호스팅</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>자료 센터</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>커뮤니티 센터</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="Info-list-wrapper">
            <li className="Info-title-common-list-attr">에어비앤비 지원</li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>에어비앤비의 코로나19 대응 방안</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>도움말 센터</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>예약 취소 옵션</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>에어비앤비 이웃 민원 지원</span>
              </a>
            </li>
            <li className="Info-common-list-attr">
              <a href="/" className="Info-common-address-attr">
                <span>신뢰와 안전</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Policy />
    </div>
  );
}

export default Info;
