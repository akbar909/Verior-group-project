import { Link } from "react-router-dom";

export default function NotebookCard({ notebook }) {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 hover:shadow-lg transition">
      <img
        src={notebook.cover}
        alt={notebook.title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {notebook.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {notebook.description}
      </p>
      <Link
        to={`/notebook/${notebook.id}`}
        className="text-blue-500 hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
}
