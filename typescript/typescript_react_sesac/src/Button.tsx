import React, { useState } from 'react'

interface ButtonProps {
  onClick(): void;
  children: string;
}

interface User {
  name: string;
  age: number;
}

const Button = (props: ButtonProps) => {
  const [name, setName] = useState('');
  // 문자열 배열
  // const [list, setList] = useState<string[]>([]);
  // 제네릭 타입 명시 가능
  const [list, setList] = useState<Array<User>>([]);

  const a: string = 'a';
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button;