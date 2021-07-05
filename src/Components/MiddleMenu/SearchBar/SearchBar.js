export const Lodge = () => {
    return(
        <div className='Total-outter-wrapper'>
            <div className='Total-inner-wrapper'>
                <div classNam='Location-total-wrapper'>
                    <label className='Inner-contents-wrapper'>
                        <div className='Inner-contents-attr'>
                            <div className='Inner-word-attr'>위치</div>
                            <input className='search-input-area-attr'></input>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export const CommonContents = () => {
    const InnerContent = () => {
        return(<div></div>);
    }
    const contentsN = [
        {
            id: 1,
            name: '체크인',
            text: '날짜 입력'
        },
        {
            id: 2,
            name: '체크아웃',
            text: '날짜 입력'
        },
        {
            id: 3,
            name: '인원',
            text: '게스트 추가'
        },
    ] 
    return(
        <div></div>
    );
}

export const Partition = () => {
    return(
        <div classNam='Partition-attr'></div>
    );
}