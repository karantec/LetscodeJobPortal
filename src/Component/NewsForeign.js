import React, { useState } from "react";

const ProductForen= () => {
  const podcasts = [
    {
        image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202010/jobs_660_130920052343_291020052310.jpg",
        title: "Software Engineer - Full Stack Developer",
        location: "Bangalore, India",
        company: "Tech Solutions Inc.",
        link: "/job-detail",
    },
    {
        image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202010/jobs_660_130920052343_291020052310.jpg",
        title: "Data Analyst",
        location: "Mumbai, India",
        company: "DataCorp Pvt Ltd",
        link: "/job-detail",
    },
    {
        image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202010/jobs_660_130920052343_291020052310.jpg",
        title: "UI/UX Designer",
        location: "Remote",
        company: "Creative Minds Studio",
        link: "/job-detail",
    },
    {
        image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202010/jobs_660_130920052343_291020052310.jpg",
        title: "DevOps Engineer",
        location: "Hyderabad, India",
        company: "CloudSys Tech",
        link: "/job-detail",
    },
    {
        image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202010/jobs_660_130920052343_291020052310.jpg",
        title: "Product Manager",
        location: "Delhi, India",
        company: "InnovateX Pvt Ltd",
        link: "/job-detail",
    },
  ];

  // State to handle current page and the number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = podcasts.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the total number of pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(podcasts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
    <section className="py-16 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div className="container mx-auto mt-32 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Jobs
        </h2>
        
        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="text-orange-500 hover:underline font-semibold"
                >
                  और पढ़ें
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          <ul className="flex space-x-4">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500"
                  } px-4 py-2 rounded-lg border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  
    </>
  );
};

export default ProductForen;
