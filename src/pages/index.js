import Board from "@/components/Board";
import Menu from "@/components/Menu";
import ToolBox from "@/components/Toolbox";
import { useRef } from "react";

export default function Home() {
  const reference = useRef(null);
  return (
    <>
      <Menu  ref={reference} />
      <ToolBox ref={reference} />
      <Board />
      <div className="absolute right-0 bottom-0">
        <p className="text-sm font-thin mr-2 animate-pulse">
          Designed & Developed by Siddhartha Sarkar
        </p>
      </div>
    </>
  );
}
