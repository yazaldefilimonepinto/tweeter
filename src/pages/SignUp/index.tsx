import { ReactNode } from "react";

interface SignUpProps {
  children?: ReactNode;
}

function SignUp({ children }: SignUpProps) {
  return (
    <>
      <h1>SignUp</h1>
      {children}
    </>
  );
}

export default SignUp;
