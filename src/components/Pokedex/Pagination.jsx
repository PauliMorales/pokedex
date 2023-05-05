import { useEffect, useState } from "react";
import "./styles/pagination.css";

const Pagination = ({ rows, data, setData }) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    console.log(currentPage, data);
    if (currentPage && data) {
      setData([...data.slice(indexOfFirstPost, indexOfLastPost)]);
    }
  }, [currentPage, data]);

  for (let i = 1; i <= Math.ceil(rows / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
