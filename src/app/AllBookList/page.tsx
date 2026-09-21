"use client"

import { Appcontext } from "@/Appcontext";
import BookListAll from "@/component/share/bookListAll";
import Read from "@/component/share/Read";

import { useContext } from "react";


const Page = () => {
  const context = useContext(Appcontext);
  if (!context){
    throw new Error("error");
  }
    const { readBook } = context;
    const { wishlist } = context;
    console.log(readBook);
    console.log(wishlist);
  return (
    <div className="max-w-300 mx-auto  mb-5">
      <BookListAll></BookListAll>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
        />
        <div className="tab-content bg-base-100  p-6">
          {readBook.map((item, index) => (
            <Read key={index} readBook={item}></Read>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100  p-6">
          {wishlist.map((item, index) => (
            <Read key={index} readBook={item}></Read>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
