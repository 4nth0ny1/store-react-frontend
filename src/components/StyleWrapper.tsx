import type { ReactNode } from "react";

type StyleWrapperProps = {
  children: ReactNode;
};

export default function StyleWrapper({ children }: StyleWrapperProps) {
  return <div className="px-16">{children}</div>;
}
