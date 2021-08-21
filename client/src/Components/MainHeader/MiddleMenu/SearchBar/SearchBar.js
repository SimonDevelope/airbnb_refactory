import './SearchBar.css';
import Box from '../Function/FlexibleSearch/Flexible';
import Add from '../Function/NOP/Nop';
import CalenderModal from '../Function/Calender/Calender';
import Recomend from '../Function/RecomendLocation/Recomend';
import ExperCalender from '../Function/ExperienceCalender/ExperCalender';
import { useEffect, useRef, useState } from 'react';
import { ModifyIconLogo } from '../../MainheaderSvg/MainHeaderSvg';
import Axios from 'axios';

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

  const [adultNumber, setAdultNumber] = useState(0);

  const [changeGuest, setChangeGuest] = useState(false);

  const onAdultNum = () => {
    setAdultNumber(adultNumber + 1);
    setChangeGuest(true);
  };

  const downAdultNum = () => {
    setAdultNumber(adultNumber - 1);
    if (adultNumber < 1) {
      return setAdultNumber(0);
    } else if (adultNumber + childNumber + infantNumber < 2) {
      return setChangeGuest(false);
    }
  };
  const [childNumber, setChildNumber] = useState(0);

  const onchildNum = () => {
    setChildNumber(childNumber + 1);
    setChangeGuest(true);
  };
  const downChildNum = () => {
    setChildNumber(childNumber - 1);

    if (childNumber < 1) {
      return setChildNumber(0);
    } else if (adultNumber + childNumber + infantNumber < 2) {
      return setChangeGuest(false);
    }
  };

  const [infantNumber, setInfantNumber] = useState(0);

  const onInfantNum = () => {
    setInfantNumber(infantNumber + 1);
    setChangeGuest(true);
  };
  const downInfantNum = () => {
    setInfantNumber(infantNumber - 1);

    if (infantNumber < 1) {
      setInfantNumber(0);
    } else if (infantNumber + adultNumber + childNumber < 2) {
      return setChangeGuest(false);
    }
  };

  const [locationContent, setLocationContent] = useState({
    location: '',
  });
  const getLocation = (e) => {
    const { name, value } = e.target;
    setLocationContent({
      ...locationContent,
      [name]: value,
    });
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

  const submitLocationData = async () => {
    const res = await Axios.post('http://localhost:4000/location', {
      location: locationContent.location,
      adult: adultNumber,
      child: childNumber,
      infant: infantNumber,
    });
    res.status === 201
      ? alert('성공적으로 수행되었습니다.')
      : alert('실패하셨습니다.');
  };

  console.log(locationContent.location);
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
                  type="text"
                  onChange={getLocation}
                  name="location"
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
                <div className="common-content-font-attr">
                  {changeGuest ? (
                    <AddAmountNop
                      adultnumber={adultNumber}
                      childnumber={childNumber}
                      infantnumber={infantNumber}
                    />
                  ) : (
                    '게스트 추가'
                  )}
                </div>
              </div>
            </div>
            <div className="main-btn-outter-wrapper">
              <button
                className="main-btn-inner-wrapper"
                onClick={submitLocationData}
              >
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
      <div ref={rangeOfapplicSelect}>
        <div className="location-on-button-attr">{showSearch && <Box />}</div>
        <div className="nop-on-button-attr">
          {showAddNop && (
            <Add
              adultNumber={adultNumber}
              childNumber={childNumber}
              infantNumber={infantNumber}
              onAdultNum={onAdultNum}
              downAdultNum={downAdultNum}
              onchildNum={onchildNum}
              downChildNum={downChildNum}
              onInfantNum={onInfantNum}
              downInfantNum={downInfantNum}
            />
          )}
        </div>
        <div>{calender && <CalenderModal />}</div>
      </div>
    </>
  );
};

// 체험 버튼 클릭 시
export const Experience = () => {
  const TargetExperSelector = useRef();
  const [showExperSearch, setShowExperSearch] = useState(false);
  const [showExperCalender, setShowExperCalender] = useState(false);
  const ExperSearchToggle = () => {
    setShowExperSearch((showExperSearch) => !showExperSearch);
  };
  const ExperCalenderToggle = () => {
    setShowExperCalender((showExperCalender) => !showExperCalender);
  };
  const closeExperModal = (e) => {
    if (
      TargetExperSelector.current &&
      !TargetExperSelector.current.contains(e.target)
    ) {
      setShowExperSearch(false);
      setShowExperCalender(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', closeExperModal);
    return () => {
      document.removeEventListener('mousedow', closeExperModal);
    };
  }, []);
  return (
    <>
      <div className="total-outter-wrapper">
        <div className="total-inner-wrapper">
          <div className="location-search-total-wrapper">
            <div className="location-search-inner-wrapper">
              <label className="inner-contents-wrapper">
                <div
                  className="inner-contents-attr"
                  onClick={ExperSearchToggle}
                >
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
            <div
              type="button"
              className="check-in-inner-wrapper"
              onClick={ExperCalenderToggle}
            >
              <div className="check-in-contents-wrapper">
                <div className="common-title-font-attr">날짜</div>
                <div className="common-content-font-attr">
                  원하는 날짜를 입력하세요
                </div>
              </div>
            </div>
          </div>
          <div className="main-btn-outter-wrapper">
            <button className="main-btn-inner-wrapper">
              <div className="modify-Icon-outter-wrapper">
                <ModifyIconLogo />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className="recomand-N-datetime-outter-toggle-wrapper"
        ref={TargetExperSelector}
      >
        <div className="recomend-view-port-outter-attr">
          {showExperSearch && <Recomend />}
        </div>
        <div className="Exper-view-port-outter-attr">
          {showExperCalender && <ExperCalender />}
        </div>
      </div>
    </>
  );
};

//카운터 총합 표현
export const AddAmountNop = ({ adultnumber, childnumber, infantnumber }) => {
  return (
    <div className="counter-amount-view-pannel">
      {`게스트: ${adultnumber + childnumber}, 유아${infantnumber}명`}
    </div>
  );
};
