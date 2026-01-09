// Import Link from Next.js
import Link from "next/link";

const AppCard = ({ link, title, bgColor = "bg-white" }: any) => {
  return (
    <Link href={link} passHref>
      <div
        className={`py-10 rounded-lg shadow-md flex flex-col items-center justify-between text-center space-y-4 cursor-pointer hover:bg-gray-100 transition-all duration-200 ${bgColor}`}
      >
        <div className="flex items-center">
          <div className="bg-purple-200 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-purple-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12h3l-3 3M15 12H9m6 0V9m0 3V9a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2z"
              />
            </svg>
          </div>
        </div>
        <div className="ml-4 space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
