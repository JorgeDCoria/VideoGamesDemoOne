export default function Card({ url, title, type, price, discount }) {
  return (
    <div>
      <img
        alt="title"
        src={url}
        className=" h-56 w-full rounded-xl object-cover"
      />
      <h3 className="text-lg text-gray-300">{title}</h3>
      <p className="mb-2 text-gray-500">{type}</p>
      <div className="flex items-center justify-center gap-2">
        {discount && (
          <div>
            <span className="rounded-lg bg-green-300 p-1 font-semibold text-gray-700">
              {discount}
            </span>
            <span className="text-gray-500">$50</span>
          </div>
        )}
        <span className="flex justify-center  text-white">{price}</span>
      </div>
    </div>
  );
}
