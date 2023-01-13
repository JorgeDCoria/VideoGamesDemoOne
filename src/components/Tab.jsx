import { Link } from "react-router-dom";

export default function Tab({ children, url }) {
  return (
    <>
      <Link
        to={url}
        className="flex items-center  rounded-xl text-gray-300 transition-colors hover:bg-[#232323]"
      >
        <main className="flex items-center gap-4  py-3 px-4">{children}</main>
      </Link>
    </>
  );
}
