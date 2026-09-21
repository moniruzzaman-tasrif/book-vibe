"use client"

import React, { createContext, useState } from "react";
import { BookType } from "./BookType";

type AppContextType = {
  readBook: BookType[];
  setReadBook: React.Dispatch<React.SetStateAction<BookType[]>>;
  wishlist: BookType[];
  setWishlist: React.Dispatch<React.SetStateAction<BookType[]>>;
};

export const Appcontext = createContext<AppContextType|undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBook, setReadBook] = useState<BookType[]>([]);
  const [wishlist, setWishlist] = useState<BookType[]>([]);

  const dataShare = {
readBook,
 setReadBook,
    wishlist,
    setWishlist,
  };
  return (
    <Appcontext.Provider value={dataShare}>{children} </Appcontext.Provider>
  );
};

export default AppProvider;
