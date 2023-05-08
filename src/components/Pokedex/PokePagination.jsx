import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./styles/pagination.css";

const PokePagination = ({ rows, data, setData }) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginate = (_, pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
      if (currentPage && data) {
      setData([...data.slice(indexOfFirstPost, indexOfLastPost)]);
    }
  }, [currentPage, data]);

  useEffect(() => {
    if (rows) {
      setCurrentPage(1);
    }
  }, [rows]);

  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }
  }, []);

  for (let i = 1; i <= Math.ceil(rows / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination
      count={Math.ceil(data?.length / postsPerPage || 0)}
      page={currentPage}
      onChange={paginate}
    />
  );
};

export default PokePagination;
