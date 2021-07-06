import './SearchBar.css';

// 숙소 버튼 클릭 시
export const Lodge = () => {
    return(
        <div className='Total-outter-wrapper'>
            <div className='Total-inner-wrapper'>
                <div className='Location-total-wrapper'>
                    <label className='Inner-contents-wrapper'>
                        <div className='Inner-contents-attr'>
                            <div className='Inner-word-attr'>위치</div>
                            <input 
                            className='search-input-area-attr'
                            placeholder='어디로 여행가세요?'
                            ></input>
                        </div>
                    </label>
                </div>
                <div className='Partition-attr'></div>
                <div className='Check-in-N-out-outter-wrapper'>
                    <div className='Check-in-outter-wrapper'>
                        <div 
                        type='button'
                        className='Check-in-inner-wrapper'
                        >
                            <div className='Check-in-contents-wrapper'>
                                <div className='Common-title-font-attr'>체크인</div>
                                <div className='Common-content-font-attr'>날짜 입력</div>
                            </div>
                        </div>
                    </div>
                    <div className='Partition-attr'></div>
                    <div className='Check-out-outter-wrapper'>
                        <div
                        type='button'
                        className='Check-in-inner-wrapper'
                        >
                            <div className='Check-in-contents-wrapper'>
                                <div className='Common-title-font-attr'>체크아웃</div>
                                <div className='Common-content-font-attr'>날짜 입력</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Partition-attr'></div>
                <div className='NOP-outter-wrapper'>
                    <div 
                    type='button'
                    className='NOP-inner-wrapper'
                    >
                        <div className='Check-in-contents-wrapper'>
                            <div className='Common-title-font-attr'>인원</div>
                            <div className='Common-content-font-attr'>게스트 추가</div>
                        </div>                        
                    </div>
                    <div className='Main-btn-outter-wrapper'>
                        <button 
                        className='Main-btn-inner-wrapper'
                        type='button'
                        >
                            <div className='Modify-Icon-outter-wrapper'>
                                <div className='Modify-Icon-inner-wrapper'>
                                    <svg 
                                    className='Svg-attr'
                                    viewBox='0 0 32 32'
                                    xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <g fill='none'>
                                            <path
                                            d="m 13 24 c 6.07513 0 11 -4.92487 11 -11 c 0 -6.07513 -4.92487 -11 -11 -11 c -6.07513 0 -11 4.92487 -11 11 c 0 6.07513 4.92487 11 11 11 Z m 8 -3 l 9 9"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 체험 버튼 클릭 시 
export const Experience = () => {
    return(
        <div className='Total-outter-wrapper'>
            <div className='Total-inner-wrapper'>
                <div className='Location-search-total-wrapper'>
                    <div className='Location-search-inner-wrapper'>
                        <label className='Inner-contents-wrapper'>
                            <div className='Inner-contents-attr'>
                                <div className='Inner-word-attr'>위치</div>
                                <input 
                                className='search-input-area-attr'
                                placeholder='어디로 여행가세요?'
                                ></input>
                            </div>
                        </label>
                    </div>
                </div>
                <div className='Partition-attr'></div>
                <div className='Date-time-outter-wrapper'>
                        <div 
                        type='button'
                        className='Check-in-inner-wrapper'
                        >
                            <div className='Check-in-contents-wrapper'>
                                <div className='Common-title-font-attr'>날짜</div>
                                <div className='Common-content-font-attr'>원하는 날짜를 입력하세요</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}




