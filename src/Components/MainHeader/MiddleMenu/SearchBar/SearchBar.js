import './SearchBar.css';
import Box from '../Function/FlexibleSearch/Flexible';
import Add from '../Function/NOP/Nop';
import CalenderModal from '../Function/Calender/Calender';
import { useEffect, useRef, useState } from 'react';
import { ModifyIconLogo } from '../../MainheaderSvg/MainHeaderSvg';

export const Lodge = () => {
  const rangeOfapplicSelect = useRef();
  const [showSearch, setShowSearch] = useState(false);
  const searchToggle = () => {
    setShowSearch((showsearch) => !showsearch);
  };
  const [showAddNop, setShowAddNop] = useState(false);
  const addNopToggle = () => {
    setShowAddNop((add) => !add);
  };
  const [calender, setCalender] = useState(false);
  const calenderToggle = () => {
    setCalender((calender) => !calender);
  };
  const closedModal = (e) => {
    if (
      rangeOfapplicSelect.current &&
      !rangeOfapplicSelect.current.contains(e.target)
    ) {
      setShowSearch(false);
      setShowAddNop(false);
      setCalender(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closedModal);
    return () => {
      document.removeEventListener('mousedown', closedModal);
    };
  }, []);

  return (
    <>
      <div className="total-outter-wrapper">
        <div className="total-inner-wrapper">
          <div className="location-total-wrapper">
            <label className="inner-contents-wrapper">
              <div className="inner-contents-attr" onClick={searchToggle}>
                <div className="inner-word-attr" type="button">
                  위치
                </div>
                <input
                  className="search-input-area-attr"
                  placeholder="어디로 여행가세요?"
                ></input>
              </div>
            </label>
          </div>
          <div className="partition-attr"></div>
          <div className="check-in-N-out-outter-wrapper">
            <div className="check-in-outter-wrapper">
              <div type="button" className="check-in-inner-wrapper">
                <div
                  className="check-in-contents-wrapper"
                  onClick={calenderToggle}
                >
                  <div className="common-title-font-attr">체크인</div>
                  <div className="common-content-font-attr">날짜 입력</div>
                </div>
              </div>
            </div>
            <div className="partition-attr"></div>
            <div className="check-out-outter-wrapper">
              <div type="button" className="check-in-inner-wrapper">
                <div
                  className="check-in-contents-wrapper"
                  onClick={calenderToggle}
                >
                  <div className="common-title-font-attr">체크아웃</div>
                  <div className="common-content-font-attr">날짜 입력</div>
                </div>
              </div>
            </div>
          </div>
          <div className="partition-attr"></div>
          <div className="search-nop-outter-wrapper">
            <div type="button" className="search-nop-inner-wrapper">
              <div className="check-in-contents-wrapper" onClick={addNopToggle}>
                <div className="common-title-font-attr">인원</div>
                <div className="common-content-font-attr">게스트 추가</div>
              </div>
            </div>
            <div className="main-btn-outter-wrapper">
              <button className="main-btn-inner-wrapper" type="button">
                <div className="modify-Icon-outter-wrapper">
                  <div className="modify-Icon-inner-wrapper">
                    <ModifyIconLogo />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="location-on-button-attr" ref={rangeOfapplicSelect}>
        {showSearch && <Box />}
      </div>
      <div className="nop-on-button-attr" ref={rangeOfapplicSelect}>
        {showAddNop && <Add />}
      </div>
      <div ref={rangeOfapplicSelect}>{calender && <CalenderModal />}</div>
    </>
  );
};

// 체험 버튼 클릭 시
export const Experience = () => {
  return (
    <div className="total-outter-wrapper">
      <div className="total-inner-wrapper">
        <div className="location-search-total-wrapper">
          <div className="location-search-inner-wrapper">
            <label className="inner-contents-wrapper">
              <div className="inner-contents-attr">
                <div className="inner-word-attr">위치</div>
                <input
                  className="search-input-area-attr"
                  placeholder="어디로 여행가세요?"
                ></input>
              </div>
            </label>
          </div>
        </div>
        <div className="partition-attr"></div>
        <div className="date-time-outter-wrapper">
          <div type="button" className="check-in-inner-wrapper">
            <div className="check-in-contents-wrapper">
              <div className="common-title-font-attr">날짜</div>
              <div className="common-content-font-attr">
                원하는 날짜를 입력하세요
              </div>
            </div>
          </div>
        </div>
        <div className="main-btn-outter-wrapper">
          <button className="main-btn-inner-wrapper" type="button">
            <div className="modify-Icon-outter-wrapper">
              <div className="modify-Icon-inner-wrapper">
                <ModifyIconLogo />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
