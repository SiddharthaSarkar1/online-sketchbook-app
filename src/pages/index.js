import Board from "@/components/Board";
import Menu from "@/components/Menu";
import ToolBox from "@/components/Toolbox";

export default function Home() {
  return (
    <>
      <Menu />
      <ToolBox />
      <Board />
      <div className="absolute right-0 bottom-0">
        <p className="text-sm font-thin mr-2 animate-pulse">
          Designed & Developed by Siddhartha Sarkar
        </p>
      </div>
    </>
  );
}
