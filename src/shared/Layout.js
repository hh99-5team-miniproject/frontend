import React from "react";

function Header() {
  return (
    <div>
      <span>나는 헤더에요......</span>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
