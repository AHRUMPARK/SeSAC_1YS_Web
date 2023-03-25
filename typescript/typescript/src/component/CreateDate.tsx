import React from 'react';
import { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "./global";

export default function CreateDate() {

  const dates = useSelector((state: RootState) => state.dates);

  //Ref 를 사용할때 어떤 태그인지 알려줘야 한다. ref에는 빈값시 undefined가 떠서 null로 해줘야 오류가 안뜸
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  function addDay() {
    // 모든 경우의 수를 처리해줘야 한다 
    if ( inputRef.current == null ) return false;
    
    const data = {
      id: dates.length + 1,
      date: inputRef.current.value
    }

    dispatch({type: 'DAY/WRITE', payload: data}); 
  }
  return (
    <div>
      <h3>현재 일수 : {dates.length}일</h3>
      <input type="text" ref={inputRef} placeholder="0000-00-00"/>
      <button onClick={addDay}>날짜 추가</button>
    </div>
  );
}
