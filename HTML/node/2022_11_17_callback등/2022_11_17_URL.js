// URL 내장모듈이라 불러와야 한다
const url = require('url');
//console.log(url);
//console.log(url.parse);
//var obj = url.parse('https://right-hot.tistory.com/entry/NodeJS-%EB%AA%A8%EB%93%88-OS-%EB%AA%A8%EB%93%88-path-%EB%AA%A8%EB%93%88-url-%EB%AA%A8%EB%93%88-querystring-%EB%AA%A8%EB%93%88');
//console.log(obj);
//console.log(url.format(obj));
//객체로 나뉘어진 얘들
//console.log( obj.protocol );


//var string = new url.URL('https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-Path-%EB%AA%A8%EB%93%88-%F0%9F%A7%B7-%EA%B2%BD%EB%A1%9C-%EC%A0%9C%EC%96%B4');
//console.log(string.searchParams);
//물음표 뒤의 얘들을 구분?
var string = new url.URL("http://localhost?name=sesac&name=코딩온&age=10");
//url.URL가지고 객체를 만드는 얘들
console.log(string.searchParams.getAll('name'));
//console.log(string.searchParams.getAll('where'));
console.log(string.searchParams.keys());
//갯올이란 얘가 where이란 친구의 값을 가져옴, name이라고하면 ['sesac', '코딩온']이라고 뜬다.
string.searchParams.append('age','20');
console.log(string.searchParams.getAll('age'));
console.log(string.searchParams.has('age'));
//has ? 뒤에 abc 문자가 있는지 확인하는 것