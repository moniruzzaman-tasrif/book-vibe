"use client";

import { Appcontext } from "@/Appcontext";
import { BookType } from "@/BookType";
import { useContext } from "react";

const Button = ({ BookData }: { BookData: BookType }) => {
  const Context = useContext(Appcontext);
if (!Context) {
  throw new Error(" app not provider ");

}
  const { readBook, setReadBook } = Context;
  const { wishlist, setWishlist } = Context;

  const ClickReadBook = () => {
    setReadBook([...readBook, BookData]);
  };
  const ClickWishlist = () => {
    setWishlist([...wishlist, BookData]);
  };
  console.log(readBook);
  return (
    <div className="flex items-center gap-4 mt-6">
      {" "}
      <button
        onClick={ClickReadBook}
        className="btn btn-outline border-gray-300 px-8 font-semibold text-gray-800 hover:bg-gray-100 hover:border-gray-400"
      >
        Read
      </button>
      <button
        onClick={ClickWishlist}
        className="btn bg-[#59c6d2] hover:bg-[#4ab3be] text-white px-8 font-semibold border-0"
      >
        Wishlist
      </button>
    </div>
  );
};

export default Button;
