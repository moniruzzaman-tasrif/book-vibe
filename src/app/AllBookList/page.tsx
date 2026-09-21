"use client"

import { Appcontext } from "@/Appcontext";
import { useContext } from "react";

const Page = () => {
  const context = useContext(Appcontext);
  console.log(context);
  return <div></div>;
};

export default Page;
