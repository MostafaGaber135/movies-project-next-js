"use client";

import ReactPaginate from "react-paginate";

interface Props {
  getPage: (page: number) => void;
  pageCount: number;
}

export default function Pagination({ getPage, pageCount }: Props) {
  if (pageCount <= 1) return null;

  return (
    <div className="flex justify-center my-4 cursor-pointer">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        previousLabel="السابق"
        onPageChange={(data) => getPage(data.selected + 1)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        containerClassName="flex gap-1 list-none"
        pageClassName="border px-3 py-1 rounded"
        activeClassName="bg-black text-white"
      />
    </div>
  );
}
