import React from "react";
import { Command, CommandInput } from "@/components/ui/command";

const SearchBox = () => {
  return (
    <Command>
      <CommandInput placeholder="Wonach suchst du?" />
    </Command>
  );
};

export default SearchBox;
