// paginate(150)
// totalItems: 150
const pages1 = {
  totalItems: 150,
  currentPage: 1,
  pageSize: 10,
  totalPages: 15,
  startPage: 1,
  endPage: 10,
  startIndex: 0,
  endIndex: 9,
  pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

// paginate(150, 7)
// totalItems: 150, currentPage: 7
const pages2 = {
  totalItems: 150,
  currentPage: 7,
  pageSize: 10,
  totalPages: 15,
  startPage: 2,
  endPage: 11,
  startIndex: 60,
  endIndex: 69,
  pages: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

// paginate(150, 7, 15)
// totalItems: 150, currentPage: 7, pageSize: 15
const pages3 = {
  totalItems: 150,
  currentPage: 7,
  pageSize: 15,
  totalPages: 10,
  startPage: 1,
  endPage: 10,
  startIndex: 90,
  endIndex: 104,
  pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

// paginate(150, 7, 15, 5)
// totalItems: 150, currentPage: 7, pageSize: 15, maxPages: 5
const pages4 = {
  totalItems: 150,
  currentPage: 7,
  pageSize: 15,
  totalPages: 10,
  startPage: 5,
  endPage: 9,
  startIndex: 90,
  endIndex: 104,
  pages: [5, 6, 7, 8, 9],
};

module.exports = { pages1, pages2, pages3, pages4 };
