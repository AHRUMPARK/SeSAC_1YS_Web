//1.클래스는 항상 import React, { Component } from 'react';
import React, { Component } from 'react';

//2. 선언만 된 상태
class BtnToNaver extends Component {
    render(){
        return (
            <a href='https://www.naver.com/'>네이버 이동</a>
        )
    }
}
// 3. 밖으로 내보내주기
export default BtnToNaver;

