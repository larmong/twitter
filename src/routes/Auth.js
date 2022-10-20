import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value},
    } = event;
    if ( name === 'email' ){
      setEmail(value);
    } else if ( name === 'password' ){
      setPassword(value);
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} name="email" type="text" placeholder="이메일을 입력해주세요." required value={email}/>
        <input onChange={onChange} name="password" type="password" placeholder="비밀번호를 입력해주세요." required value={password}/>
        <input type="submit" value="로그인"/>
        <div>
          <button>Google 로그인</button>
          <button>Github 로그인</button>
        </div>
      </form>
    </div>
  )
}
export default Auth;
