const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quotes = [
  {
    quote: "위대한 일을 하는 유일한 방법은 자신이 하는 일을 사랑하는 것뿐이다.",
    author: "스티브 잡스",
  },
  { quote: "당신이 보고 싶은 변화가 되라.", author: "마하트마 간디" },
  {
    quote: "결국, 우리는 적의 말이나 친구의 침묵을 기억할 것이다.",
    author: "마틴 루터 킹 주니어",
  },
  {
    quote: "당신이 다른 계획을 세우고 있을 때 삶이 일어난다.",
    author: "존 레논",
  },
  {
    quote:
      "성공은 영원하지 않고, 실패는 치명적인 것이 아니다. 계속하는 용기가 모든 것이다.",
    author: "윈스턴 처칠",
  },
  {
    quote: "당신이 할 수 있다고 믿으면 절반은 이미 이루어진 것이다.",
    author: "테드로스 루스벨트",
  },
  {
    quote: "멈추지 않는 한, 당신이 얼마나 천천히 가든 상관없다.",
    author: "공자",
  },
  {
    quote: "당신의 미래를 예측하는 가장 좋은 방법은 그것을 창조하는 것이다.",
    author: "에이브러함 링컨",
  },
  {
    quote: "행복은 준비된 것이 아니다. 당신의 행동에서 나온다.",
    author: "달라이 라마",
  },
  {
    quote: "삶에 대해 배운 모든 것을 세 단어로 요약할 수 있다: 삶은 계속된다.",
    author: "로버트 프로스트",
  },
];

quoteNumber = Math.floor(Math.random() * quotes.length);
quote.innerText = quotes[quoteNumber]["quote"];
author.innerText = quotes[quoteNumber]["author"];
