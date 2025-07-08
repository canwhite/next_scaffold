import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <div className="flex h-full w-full flex-col items-center p-4">{children}</div>;
}
