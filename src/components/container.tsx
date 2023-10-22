import React from "react";

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">{children}</div>
  );
}

export default Container;
