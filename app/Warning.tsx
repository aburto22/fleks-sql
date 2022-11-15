export default function Warning() {
  return (
    <div className="fixed p-4 text-white rounded-full shadow-xl group top-24 right-8 bg-fleks-dark">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <p className="absolute top-0 p-3 transition-all -translate-x-full rounded-lg shadow-lg opacity-0 group-hover:opacity-100 w-72 -left-4 bg-gray-50 text-fleks-dark">
        Never, ever, do something like this on a production site (or any site),
        as this left the door open for SQL Injection Attacks.
      </p>
    </div>
  );
}
