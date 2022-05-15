import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "state/actions/contentActions";
import Pagination from "react-js-pagination";

import Skeleton from "react-loading-skeleton";
import BookOne from "assets/images/book1.jpg";
import BookTwo from "assets/images/book2.jpg";
import BookThree from "assets/images/book3.jpg";

import "react-loading-skeleton/dist/skeleton.css";
import "./IndexPage.scss";
import Book from "components/Book";

const perPage = 4;

const IndexPage = () => {
  const catalogRef = useRef(null);
  const [page, setPage] = useState(3);

  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((state) => state.contentReducer);

  const indexOfLastBook = page * perPage;
  const indexOfFirstBook = indexOfLastBook - perPage;

  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleScroll = () => {
    catalogRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="index-page">
      <div className="bg-main index-page__hero">
        <div className="index-page__hero__book index-page__hero__book-1">
          <img src={BookOne} alt="book" />
        </div>
        <div className="index-page__hero__book index-page__hero__book-2">
          <img src={BookTwo} alt="book" />
        </div>
        <div className="index-page__hero__book index-page__hero__book-3">
          <img src={BookThree} alt="book" />
        </div>
        <div className="index-page__hero__content">
          <h1 className="fw-700 text-black text-center">Book Club</h1>
          <button className="button_unstyled fw-500" onClick={handleScroll}>
            <span>Explore our catalog</span>
          </button>
        </div>
      </div>
      <div ref={catalogRef} className="index-page__browse">
        <div className="bg-main container index-page__browse__content">
          <h2 className="index-page__browse__content__heading">Catalog</h2>
          <div className="index-page__browse__content__books">
            {isLoading
              ? Array(4)
                  .fill({})
                  .map((_, index) => (
                    <div
                      key={index}
                      className="index-page__browse__content__books__book"
                    >
                      <Skeleton />
                    </div>
                  ))
              : currentBooks.map((book, index) => (
                  <Book
                    key={index}
                    title={book.title}
                    author={book.author}
                    image={book.image}
                    price={book.price}
                    id={book.id}
                  />
                ))}
          </div>
          {isLoading ? null : (
            <div>
              <Pagination
                activePage={page}
                itemsCountPerPage={perPage}
                totalItemsCount={books.length}
                pageRangeDisplayed={Math.ceil(books.length / perPage)}
                onChange={(pageNumber) => setPage(pageNumber)}
                hideNavigation={true}
                hideFirstLastPages={true}
                activeClass="pagination--selected"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
