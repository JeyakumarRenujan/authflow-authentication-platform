import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
      "
    >
      <h1
        className="
          text-7xl
          font-bold
          text-blue-600
        "
      >
        404
      </h1>

      <p
        className="
          mt-4
          text-slate-500
        "
      >
        Page not found
      </p>

      <Link
        to="/"
        className="
          mt-6
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
        "
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;