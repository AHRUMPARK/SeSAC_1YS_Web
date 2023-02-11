//1. js 적으로 하는 법 => import로 불러오는 방법, 이미지의 주소값을 가지는 변수
// js적으로 한다면 * src 내부에 있는 파일만 접근이 가능하다. 즉 import logo from '../../logo.svg'; 는 안됨~!!!!!
import logo from '../logo.svg';


function ImgComponent() {
  return (
    <img src={logo} alt="이미지" />
    // src를 벗어난 파일을 쓰고 싶다면 ! static 설정을 해줬을 시
    // 2. 페이스북에서 지정한 public 파일을 쓰면 된다 ./파일명
    // <img src='/logo192.png' alt="이미지"/>
  )
}

export default ImgComponent;

