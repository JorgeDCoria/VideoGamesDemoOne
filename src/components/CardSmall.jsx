import { Link } from "react-router-dom";
export default function CardSmall({ title, url }) {
  return (
    <>
      <Link className="flex flex-col items-center gap-4 text-lg text-white lg:flex-row">
        <img src={url} className="h-16 w-14  object-cover" alt={title} />
        {title}
      </Link>
    </>
  );
}
