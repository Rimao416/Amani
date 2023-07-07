import React from "react";
import Title from "../components/Title";

function ContentLayout({ titre,children}) {
  return (
    <>
      <Title title={titre} />
    {children}
     
    </>
  );
}

export default ContentLayout;
