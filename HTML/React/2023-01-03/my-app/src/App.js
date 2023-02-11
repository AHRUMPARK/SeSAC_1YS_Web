//컴포넌트 불러오기
//3. mainHeader 라고 치면 밑이 자동 완성
// import MainHeader from './components/mainHeader.js';
// 4. 컴포넌트는 < />로 씁니다.
import './App.css';
import BtnToNaver from './components/BtnToNaver';
import ImgComponent from './components/ImgComponent';


function App() {
  return (
    <div className="App">
      <ImgComponent />
      <BtnToNaver />
    </div>
  );
}

export default App;
