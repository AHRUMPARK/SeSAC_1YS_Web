// React 따라하기

function HelloworldButton(){
    //변수, 함수 구조분해 할당 배열처럼 선언
const [isClick, setClickState ] = React.useState("It isn't clicked ");
console.log(isClick);
    //핵심
    return React.createElement(
        "button",
         { onClick: () => {setClickState("It's clicked")} },
         isClick );
}

const e = React.createElement;
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
//리엑트는 RENDER로 HTML 요소 자체를 함수에 담을 수 있다.
root.render(e(HelloworldButton));