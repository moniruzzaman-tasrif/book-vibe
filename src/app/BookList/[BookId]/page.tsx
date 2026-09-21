import { BookType } from "@/BookType";
import Bookdetails from "@/component/homePage/Bookdetails";
import { notFound } from "next/navigation";

interface dtnamicPage {
  params: Promise<{ BookId: string }>;
}

const daynamicData = async (): Promise<BookType[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");
  return res.json();
};

const page = async ({ params }: dtnamicPage) => {
  const { BookId } = await params;
  const dataBook = await daynamicData();
  const findData = dataBook.find(
    (item: BookType) => BookId === String(item.bookId),
  );
  if (!findData) notFound();
  return (
    <div>
      <Bookdetails detailsData={findData}></Bookdetails>
    </div>
  );
};

export default page;
