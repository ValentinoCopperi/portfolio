import * as React from "react";

export function EmailTemplate({ firstName, message,email }: { firstName: string; message: string,email:string }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", color: "#333" }}>
      <h2>Hi,I am {firstName}! , {email}</h2>
      <p>{message}</p>
    </div>
  );
}
