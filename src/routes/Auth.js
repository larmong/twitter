import React, { useState } from "react";
import {authService} from "../fbase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true)
  const onChange = (event) => {
    const {
      target: { name, value},
    } = event;
    if ( name === 'email' ){
      setEmail(value);
    } else if ( name === 'password' ){
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if(newAccount){
        data = await authService.createUserWithEmailAndPassword( email, password )
      } else {
        data = await authService.signInWithEmailAndPassword( email, password )
      }
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} name="email" type="text" placeholder="이메일을 입력해주세요." required value={email}/>
        <input onChange={onChange} name="password" type="password" placeholder="비밀번호를 입력해주세요." required value={password}/>
        <input type="submit" value={ newAccount ? "Create Account" : "Login" }/>
        <div>
          <button>Google 로그인</button>
          <button>Github 로그인</button>
        </div>
      </form>
    </div>
  )
}
export default Auth;
