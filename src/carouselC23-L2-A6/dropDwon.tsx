"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
// import AssertiveTalk from "@/carouselC23-L2-A6/AssertiveTalk.json";
type myProps = {
  dropMenuData: string[];
  onSelect: (selected: string) => void;
};
const CategoryMenu = ({ dropMenuData, onSelect }: myProps) => {
  const [cetegotyName, setCategoryName] = useState("Select Communication Type");
  const [isSelected, setIsSelected] = useState(false);
  const handleSelection = (item: string) => {
    setCategoryName(item);
    setIsSelected(true);
    onSelect(item); // trigger parent logic
  };




  return (
    <DropdownMenu>
      <div className="w-full flex justify-center">
        <DropdownMenuTrigger className="rounded-lg outline-none font-bold border border-black px-5 py-1 cursor-pointer flex justify-center items-center gap-1 disabled:cursor-default">
          {cetegotyName}
          {!isSelected && <IoMdArrowDropdown className="text-lg" />}
        </DropdownMenuTrigger>
      </div>

      <DropdownMenuContent>
        {dropMenuData.map((item, index) => (
          <DropdownMenuItem
            key={index}
            className="cursor-pointer"
            onClick={() => handleSelection(item)}
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryMenu;
