import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Contact Information */}
        <div>
          <h2 className="text-blue-600 font-medium">Contact Us</h2>
          <p className="mt-4 text-gray-900 text-xl font-medium sm:text-2xl">
            support@jobportal.com
          </p>
          <ul className="mt-4 text-sm text-gray-700 space-y-1">
            <li>Monday to Friday: 9am - 7pm</li>
            <li>Saturday: 10am - 4pm</li>
            <li>Sunday: Closed</li>
          </ul>
          <ul className="mt-6 flex gap-4">
            {[
              { label: "Facebook", iconPath: "M22 ...", link: "#" },
              { label: "Instagram", iconPath: "M12.315 ...", link: "#" },
              { label: "Twitter", iconPath: "M8.29 ...", link: "#" },
              { label: "LinkedIn", iconPath: "M12 ...", link: "#" },
            ].map(({ label, iconPath, link }, idx) => (
              <li key={idx}>
                <a
                  href={link}
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">{label}</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d={iconPath} clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Job Seekers */}
        <div>
          <h2 className="text-blue-600 font-medium">Job Seekers</h2>
          <ul className="mt-6 text-sm text-gray-700 space-y-4">
            {[
              { name: "Browse Jobs", link: "/jobs" },
              { name: "Upload Resume", link: "/upload-resume" },
              { name: "Job Alerts", link: "/job-alerts" },
              { name: "Career Advice", link: "/career-advice" },
            ].map(({ name, link }, idx) => (
              <li key={idx}>
                <a href={link} className="transition hover:text-blue-600">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Employers */}
        <div>
          <h2 className="text-blue-600 font-medium">Employers</h2>
          <ul className="mt-6 text-sm text-gray-700 space-y-4">
            {[
              { name: "Post a Job", link: "/post-job" },
              { name: "Search Resumes", link: "/search-resumes" },
              { name: "Employer Dashboard", link: "/employer-dashboard" },
              { name: "Pricing", link: "/pricing" },
            ].map(({ name, link }, idx) => (
              <li key={idx}>
                <a href={link} className="transition hover:text-blue-600">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h2 className="text-blue-600 font-medium">Policies</h2>
          <ul className="mt-6 text-sm text-gray-700 space-y-4">
            {[
              { name: "Terms of Service", link: "/terms" },
              { name: "Privacy Policy", link: "/privacy" },
              { name: "Refund Policy", link: "/refund-policy" },
            ].map(({ name, link }, idx) => (
              <li key={idx}>
                <a href={link} className="transition hover:text-blue-600">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-200 pt-6">
        <p className="text-xs text-gray-500 text-center">
          &copy; 2024 JobPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
