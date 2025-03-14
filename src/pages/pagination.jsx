import { useState, useEffect } from "react";

const Pagination = ({ totalItems=20, itemsPerPage=10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, totalItems);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="head_right_side">
    <div className="pagination">
      <span className="page_numberlist">{`${startItem}-${endItem} of ${totalItems}`}</span>
      <button className="page-btn left" onClick={handlePrev} disabled={currentPage === 1}>
        <img src="/../images/page-arrow.png" alt="Left Arrow" />
      </button>
      <button className="page-btn right" onClick={handleNext} disabled={currentPage === totalPages}>
      <img src="/../images/page-arrow.png" alt="Right Arrow" />
      </button>
    </div>
    <div className="keyboard">
        <img src="/../images/key.png" alt="KeyBoard" />
        <button className="key-btn"><img src="/../images/arrow-filled.png" alt="Arrow Filled" /></button>
    </div>
    </div>
  );
};

export default Pagination;
