import React from "react";

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">{children}</div>
  );
}

export default Container;
