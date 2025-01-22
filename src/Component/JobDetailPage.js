import React from "react";

const JobDetailPage = () => {
  // Sample job data (in a real app, this data could come from an API)
  const jobData = {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    postedDate: "January 20, 2025",
    jobDescription: `
      We are looking for a skilled Software Engineer to join our team. 
      As a Software Engineer, you will be responsible for developing high-quality software solutions, 
      working collaboratively with other developers, and improving the performance of existing systems.

      Responsibilities:
      - Write clean, scalable code.
      - Collaborate with other team members to design software solutions.
      - Participate in code reviews and testing.
      - Maintain and update existing software applications.

      Requirements:
      - Bachelor's degree in Computer Science or related field.
      - Experience with JavaScript, Node.js, React, and other relevant technologies.
      - Strong problem-solving and debugging skills.
      - Excellent communication and teamwork skills.
    `,
    companyDescription: `
      Tech Corp is a leading tech company specializing in software development and IT solutions.
      Our mission is to drive innovation and create cutting-edge products that empower businesses around the world.
    `,
    salary: "$100,000 - $120,000 per year",
    jobType: "Full-time",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-48">
      <h1 className="text-3xl font-semibold text-gray-900">{jobData.title}</h1>
      <p className="mt-2 text-xl text-gray-700">{jobData.company}</p>
      <p className="mt-1 text-gray-600">{jobData.location}</p>
      <p className="mt-1 text-gray-500 text-sm">Posted on: {jobData.postedDate}</p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Job Description</h2>
        <p className="mt-2 text-gray-700">{jobData.jobDescription}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">About {jobData.company}</h2>
        <p className="mt-2 text-gray-700">{jobData.companyDescription}</p>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div>
          <p className="text-lg font-medium text-gray-800">Salary: {jobData.salary}</p>
          <p className="text-lg font-medium text-gray-800">Job Type: {jobData.jobType}</p>
        </div>
        <div>
          <button
            onClick={() => alert("Application submitted!")}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
