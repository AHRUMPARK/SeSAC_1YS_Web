import React, { Component } from 'react';

// 컴포넌트 만들기
// 1.그림요소만 넣는다. return 소괄호 
function MainHeader(){
    return (
        <h1>Hello, Component World!</h1>
    )
}

// 2. 이파일은 외부에서 쓸 수 있게 해야 한다. 메인헤더 함수 밖으로 디폴트로 쓸 수 있다.
export default MainHeader;



// 클래스 상속, 정의
// class MainHeader extends Component {
//     render(){
//         return (
//             <h1>Hello, Class component World</h1>
//         )
//     }
// }