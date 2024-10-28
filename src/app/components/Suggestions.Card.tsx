import {MouseEventHandler} from "react";

const SuggestionTile = ({ ques, onClick }: { ques: string, onClick:MouseEventHandler<HTMLElement> }) => {
  return (
    <article onClick={onClick} className="cursor-pointer p-3 bg-white/10 border-white/20 border-[1px] rounded-md h-full">
      {ques}
    </article>
  );
};

export default SuggestionTile;
