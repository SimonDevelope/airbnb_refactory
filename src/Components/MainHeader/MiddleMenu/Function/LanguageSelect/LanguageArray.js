export const contents = [
  {
    id: 0,
    content: '한국어',
    explain: '대한민국',
  },
  {
    id: 1,
    content: 'azerbaycan dili',
    explain: 'azerbaycan',
  },
  {
    id: 2,
    content: 'Bahasa Indonesia',
    explain: 'Indonesia',
  },
  {
    id: 3,
    content: 'Bosanski',
    explain: 'Bosna i Hercegovina',
  },
  {
    id: 4,
    content: 'Català',
    explain: 'Espanya',
  },
  {
    id: 5,
    content: '한국어',
    explain: '대한민국',
  },
  {
    id: 6,
    content: 'azerbaycan dili',
    explain: 'azerbaycan',
  },
  {
    id: 7,
    content: 'Bahasa Indonesia',
    explain: 'Indonesia',
  },
  {
    id: 8,
    content: 'Bosanski',
    explain: 'Bosna i Hercegovina',
  },
  {
    id: 9,
    content: 'Català',
    explain: 'Espanya',
  },
  {
    id: 10,
    content: '한국어',
    explain: '대한민국',
  },
  {
    id: 11,
    content: 'azerbaycan dili',
    explain: 'azerbaycan',
  },
  {
    id: 12,
    content: 'Bahasa Indonesia',
    explain: 'Indonesia',
  },
  {
    id: 13,
    content: 'Bosanski',
    explain: 'Bosna i Hercegovina',
  },
  {
    id: 14,
    content: 'Català',
    explain: 'Espanya',
  },
  {
    id: 15,
    content: '한국어',
    explain: '대한민국',
  },
  {
    id: 16,
    content: 'azerbaycan dili',
    explain: 'azerbaycan',
  },
  {
    id: 17,
    content: 'Bahasa Indonesia',
    explain: 'Indonesia',
  },
  {
    id: 18,
    content: 'Bosanski',
    explain: 'Bosna i Hercegovina',
  },
  {
    id: 19,
    content: 'Català',
    explain: 'Espanya',
  },
  {
    id: 20,
    content: '한국어',
    explain: '대한민국',
  },
  {
    id: 21,
    content: 'azerbaycan dili',
    explain: 'azerbaycan',
  },
  {
    id: 22,
    content: 'Bahasa Indonesia',
    explain: 'Indonesia',
  },
  {
    id: 23,
    content: 'Bosanski',
    explain: 'Bosna i Hercegovina',
  },
  {
    id: 24,
    content: 'Català',
    explain: 'Espanya',
  },
  {
    id: 25,
    content: '한국어',
    explain: '대한민국',
  },
  {
    id: 26,
    content: 'azerbaycan dili',
    explain: 'azerbaycan',
  },
  {
    id: 27,
    content: 'Bahasa Indonesia',
    explain: 'Indonesia',
  },
  {
    id: 28,
    content: 'Bosanski',
    explain: 'Bosna i Hercegovina',
  },
  {
    id: 29,
    content: 'Català',
    explain: 'Espanya',
  },
  {
    id: 30,
    content: '한국어',
    explain: '대한민국',
  },
  {
    id: 31,
    content: 'azerbaycan dili',
    explain: 'azerbaycan',
  },
  {
    id: 32,
    content: 'Bahasa Indonesia',
    explain: 'Indonesia',
  },
  {
    id: 33,
    content: 'Bosanski',
    explain: 'Bosna i Hercegovina',
  },
  {
    id: 34,
    content: 'Català',
    explain: 'Espanya',
  },
];
export const LanguageAndCountry = ({ content }) => {
  return (
    <div className="recomendation-language-location-btn-outter-wrapper">
      <button className="recomend-united-kingdom-btn-outter-wrapper">
        <span className="recomend-common-btn-contents-attr">
          {content.content}
        </span>
        <span className="recomend-common-btn-contents-attr-explain">
          {content.explain}
        </span>
      </button>
    </div>
  );
};
