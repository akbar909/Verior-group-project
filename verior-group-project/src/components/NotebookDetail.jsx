import image from "../assets/image.png";

export default function NotebookDetail({ notebook }) {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 p-6 rounded-lg shadow">
      <img src={image} alt="Notebook" className="w-full rounded mb-6" />
      <h1 className="text-3xl font-bold mb-4">{notebook.title}</h1>
      <p className="text-gray-700 dark:text-gray-300">{notebook.content}</p>
    </div>
  );
}
