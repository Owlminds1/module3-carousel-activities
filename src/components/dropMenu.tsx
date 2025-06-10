"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

type myProps = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

const DropMenu = ({ open, setOpen }: myProps) => {
  const [selected, setSelected] = useState("How did you feel?"); // default value

  const handleSelect = (value: string) => {
    setSelected(value);      // update selected value
    setOpen(false);          // close dropdown after selection
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="p-1 px-3 border rounded-lg w-full cursor-pointer outline-none bg-white shadow">
        {selected}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {["Angry/Furious", "Dull", "Unsure", "Happy/Joyful"].map((item) => (
          <DropdownMenuItem
          className="cursor-pointer"
            key={item}
            onSelect={(e) => {
              e.preventDefault();
              handleSelect(item);
            }}
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropMenu;
