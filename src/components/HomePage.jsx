import React from "react";
import { Button } from "./ui/button";
import MaxWidthWrapper from "@/common/MaxWidthWrapper";
import SearchBox from "./SearchBox";
// import Logo from "./Logo";

const HomePage = () => {
  return (
    <MaxWidthWrapper className={"mt-6 mr-6"}>
      <div className="flex gap-4 justify-end mb-7">
        <Button className="bg-green-400">Sign In</Button>
        <Button variant={"ghost"}>Register</Button>
      </div>
      <SearchBox className="" />
    </MaxWidthWrapper>
  );
};

export default HomePage;
