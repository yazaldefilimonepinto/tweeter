import { ReactNode } from "react";

interface LoginProps {
  children?: ReactNode;
}

function Login({ children }: LoginProps) {
  return (
    <>
      <h1>Login</h1>
      {children}
    </>
  );
}

export default Login;
