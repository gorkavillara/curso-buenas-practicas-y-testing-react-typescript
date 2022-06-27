import React, { memo } from "react";

const MemoComponent = memo(({ title }: { title: string }) => {
  console.log("MemoComponent render");
  return <h1>{title}</h1>;
});

export default MemoComponent;
