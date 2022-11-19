
    var content = document.querySelector('.text-basic');
    function addList() {
        console.log('addList')
        //내용을 입력하지 않는다면, 뜨는 창 return false는 끝나게하는것
        if (!content.value) {
            alert('내용을 입력해주세요.');
            content.focus();
            return false;
        }
        // tr은 append 하기위해 필요하고, input은 체크박스 추가를 위해 필요하다.
        //생성한 후 input에는 type="checkbox", class="btn-chk"라는 속성도 부여
        var tr = document.createElement('tr');
        var input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('class', 'btn-ck');

        //인풋 체크창 여는 기능
        var td01 = document.createElement('td');
        td01.appendChild(input);
        tr.appendChild(td01);
        // td02는 추가 버튼 옆 입력창에서 받는 값을 가져온다.
        var td02 = document.createElement('td');
        td02.innerText = content.value;
       
        // tbody태그의 자식 tr추가, tr은 체크박스와 입력값을 추가
        // 끝나면 입력값을 공백으로,  포커스 벗어나도록?
        document.querySelector('tbody').appendChild(tr);
        tr.append(td01, td02);
        content.value='';
        content.focus();
    }

    function btnDelAll() {
        // 차일드노드: 현재 요소의 자식 노드가 포함된 NodeList를 반환(주석)
        var list = document.querySelector('tbody');
        while(list.hasChildNodes()){
            list.removeChild(list.firstChild);
        }
    }
    function btnDelLast() {
       
        var body = document.querySelector('tbody');
        // tbody의 자식 tr들
        var list = document.querySelectorAll('tr');
        // 변수 = list 객채의 갯수에서 -1 값
        if(list.length > 0) {
            var liLen = list.length-1;
            body.removeChild(list[liLen]);
        } else {
            alert('삭제할 항목이 없습니다.');
            return false;
        }
    }
    function DeleteSel() {
        var body = document.querySelector('tbody');
        var ckbox = document.querySelectorAll('tbody .btn-ck');
        for( var i in ckbox ){
            if(ckbox[i].nodeType == 1 && ckbox[i].checked == true ){
                //input의 부모 td의 부모 tr
                body.removeChild(ckbox[i].parentNode.parentNode);
                console.log(ckbox[i].parentNode);
            }
        }
    }

