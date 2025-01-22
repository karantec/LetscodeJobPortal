import React, { useState } from "react";

const PodcastSection = () => {
  const podcasts = [
    {
      image: "https://img.youtube.com/vi/4KNJll5hv7o/hqdefault.jpg",
      title: "How to Learn DSA in 2025 | Complete Roadmap | Java | Python | C++ | JavaScript",
      videoUrl: "https://www.youtube.com/embed/4KNJll5hv7o?si=jwo-2bV6NUwpRmLY",
      link: "/detail",
    },
    {
      image: "https://img.youtube.com/vi/4KNJll5hv7o/hqdefault.jpg",
      title: "How to Learn DSA in 2025 | Complete Roadmap | Java | Python | C++ | JavaScript",
      videoUrl: "https://www.youtube.com/embed/4KNJll5hv7o?si=jwo-2bV6NUwpRmLY",
      link: "/detail",
    },
    {
      image: "https://img.youtube.com/vi/4KNJll5hv7o/hqdefault.jpg",
      title: "How to Learn DSA in 2025 | Complete Roadmap | Java | Python | C++ | JavaScript",
      videoUrl: "https://www.youtube.com/embed/4KNJll5hv7o?si=jwo-2bV6NUwpRmLY",
      link: "/detail",
    },
    {
      image: "https://img.youtube.com/vi/4KNJll5hv7o/hqdefault.jpg",
      title: "How to Learn DSA in 2025 | Complete Roadmap | Java | Python | C++ | JavaScript",
      videoUrl: "https://www.youtube.com/embed/4KNJll5hv7o?si=jwo-2bV6NUwpRmLY",
      link: "/detail",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlayClick = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between">
        {/* Podcast Cards Section */}
        <div className="lg:w-3/4 w-full">
          <h2 className="text-3xl font-bold text-center mb-8 underline">हमारे पॉडकास्ट सुनें</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {podcasts.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                  {/* Show Play Button or iframe */}
                  {!activeVideo && (
                    <div
                      className="w-full h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <button
                        onClick={() => handlePlayClick(item.videoUrl)}
                        className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-70"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-16 w-16"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {/* Display iframe if video is active */}
                  {activeVideo && activeVideo === item.videoUrl && (
                    <iframe
                      width="560"
                      height="315"
                      src={item.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-auto"
                    ></iframe>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <a href={item.link} className="text-orange-500 hover:underline font-semibold">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/4 w-full lg:ml-6 mt-8 lg:mt-0 text-center lg:text-left">
          <h3 className="text-2xl font-bold mt-20 text-gray-800">Read More About out Channel</h3>
          <p className="text-gray-600">
          Read More About out Channel
          </p>
          <a
            href="/more-podcasts"
            className="inline-block mt-4 text-orange-500 font-semibold hover:underline"
          >
            और जानें
          </a>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
