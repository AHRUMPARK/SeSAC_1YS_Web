const express = require('express');
const { Socket } = require('socket.io');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

// 클라이언트 소켓이 연결이 되면 콜벡 함수가 실행된다.
// (socket) : 클라이언트 소켓과 연결 되고 새로 생성된 소켓
// 클라이언트마다 연결된 소켓이 다르다 그것을 확인하기위해 소캣아이디로 확인해보겟다.
io.on('connection', (socket) => {
  console.log('Server Socket connected'); // (2)
  
  socket.emit("welcome", { msg: "welcome" }); //(3)
  // 받는거니까 서버에 보임
  socket.on('response', (str) => { //(6)
    console.log(str);
  })

  // socket.on('hello_e', (data) => {
  //   console.log('hello_e data : ', data );
  //   socket.emit("response", "hello_e 데이터 보냅니다~");
  // })

    let data = {
      hello: "안녕하세요!",
      study: "공부 합시다!",
      bye: "안녕히가세요!",
    };

    socket.on("send", (msg) => {
      console.log(msg);
      // 데이터 객체 키값을 받음 data[msg]
      socket.emit("response", msg + " : " + data[msg]);
      // data['hello'] = '안녕하세요!';
    });

  socket.on('disconnect', () => {
    console.log('Server Socket disconnected');
  })
})

http.listen( 8000, () => {
  console.log('Sever port : ', 8000 );
})