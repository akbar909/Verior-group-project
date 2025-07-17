import { useParams } from "react-router-dom";
import image1 from "../assets/image.png";
import image2 from "../assets/image1.png";

const notebooks = [
  {
    id: "1",
    content: `The App Router in Next.js is responsible for handling client-side routing within your application. It provides a declarative and intuitive way to define routes, handle navigation, and manage dynamic URLs. Here are some key features of the Next.js App Router:

1. File-based Routing: Next.js uses a file-based routing system, where each page of your application is represented by a file in the "pages" directory. The name of the file determines the corresponding URL path. For example, a file named "about.js" in the "pages" directory will be accessible at the "/about" URL path.
2. Dynamic Routes: Next.js allows you to create dynamic routes by using brackets ([ ]) in the file name or directory structure. For example, a file named "[id].js" can match routes like "/posts/1" or "/users/john". The dynamic segments are accessible as parameters in the page component and can be used to fetch data or customize the content.
3. Link Component: Next.js provides the <Link> component, which enables client-side navigation between pages. It ensures that the page transition is handled gracefully, without full page reloads. You can use the <Link> component to create anchor tags (<a>) with client-side routing behavior.
4. Programmatic Navigation: Next.js also offers programmatic navigation through the useRouter hook. It allows you to access the router object, which provides methods like push(), replace(), and back() to navigate programmatically within your application.
5. Code Splitting: Next.js automatically performs code splitting, which means that only the JavaScript and CSS needed for the current page are loaded. This helps optimize the initial page load time and improves performance.

These are some of the fundamental features and concepts of the App Router in Next.js. However, it's important to note that newer versions of Next.js may introduce additional enhancements or changes to the App Router. To stay updated on the latest features and changes, I recommend referring to the official Next.js documentation or the Next.js GitHub repository.`,
    cover: image1,
  },
  {
    id: "2",
      content: `The App Router in Next.js is responsible for handling client-side routing within your application. It provides a declarative and intuitive way to define routes, handle navigation, and manage dynamic URLs. Here are some key features of the Next.js App Router:
  
  1. File-based Routing: Next.js uses a file-based routing system, where each page of your application is represented by a file in the "pages" directory. The name of the file determines the corresponding URL path. For example, a file named "about.js" in the "pages" directory will be accessible at the "/about" URL path.
  2. Dynamic Routes: Next.js allows you to create dynamic routes by using brackets ([ ]) in the file name or directory structure. For example, a file named "[id].js" can match routes like "/posts/1" or "/users/john". The dynamic segments are accessible as parameters in the page component and can be used to fetch data or customize the content.
  3. Link Component: Next.js provides the <Link> component, which enables client-side navigation between pages. It ensures that the page transition is handled gracefully, without full page reloads. You can use the <Link> component to create anchor tags (<a>) with client-side routing behavior.
  4. Programmatic Navigation: Next.js also offers programmatic navigation through the useRouter hook. It allows you to access the router object, which provides methods like push(), replace(), and back() to navigate programmatically within your application.
  5. Code Splitting: Next.js automatically performs code splitting, which means that only the JavaScript and CSS needed for the current page are loaded. This helps optimize the initial page load time and improves performance.
  
  These are some of the fundamental features and concepts of the App Router in Next.js. However, it's important to note that newer versions of Next.js may introduce additional enhancements or changes to the App Router. To stay updated on the latest features and changes, I recommend referring to the official Next.js documentation or the Next.js GitHub repository.`,
    cover: image2,
  },
];

export default function NotebookDetailPage() {
  const { id } = useParams();
  const notebook = notebooks.find((n) => n.id === id);

  if (!notebook) {
    return (
      <div className="p-10 text-red-600 text-center text-xl">
        Notebook not found.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black">
      {(notebook.id === "1" || notebook.id === "2") && (
        <>
          <div className="flex flex-col justify-center mb-6 w-full max-w-4xl mx-auto px-4 sm:px-8 md:px-12">
            <h1 className="font-inter font-bold text-[40px] sm:text-[60px] md:text-[80px] leading-[1] align-bottom mb-2 text-white dark:text-white" style={{ letterSpacing: '0em' }}>
              Ultimate guide to the App Router in Next.js 13
            </h1>
            <p className="font-inter font-normal text-[16px] sm:text-[20px] md:text-[24px] leading-[1] text-gray-500" style={{ letterSpacing: '-0.019em' }}>
              17th Jul 2023 –– 7 min read
            </p>
          </div>
          <div className="w-full" style={{ borderTop: '1px solid #FFFFFF1A', opacity: 1, height: 0, marginBottom: '32px' }} />
        </>
      )}
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow mt-10">
      <img
        src={notebook.cover}
        alt={notebook.title}
          className={(notebook.id === "1" || notebook.id === "2") ? "w-full max-w-[1024px] aspect-[16/9] h-auto object-cover rounded-[12px] mb-6 mx-auto" : "w-full h-64 object-cover rounded mb-6"}
          style={(notebook.id === "1" || notebook.id === "2") ? { opacity: 1, transform: 'rotate(0deg)' } : {}}
      />
        <h1 className="text-3xl font-bold mb-4 text-white dark:text-white">
        {notebook.title}
      </h1>
        <p className="text-gray-300 dark:text-gray-300 mb-2">
        {notebook.description}
      </p>
        {(notebook.id === "1" || notebook.id === "2") ? (
          <>
            <div className="text-white text-base sm:text-lg space-y-4 w-full max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-6 bg-transparent">
              <p>The App Router in Next.js is responsible for handling client-side routing within your application. It provides a declarative and intuitive way to define routes, handle navigation, and manage dynamic URLs. Here are some key features of the Next.js App Router:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li><b>File-based Routing:</b> Next.js uses a file-based routing system, where each page of your application is represented by a file in the "pages" directory. The name of the file determines the corresponding URL path. For example, a file named "about.js" in the "pages" directory will be accessible at the "/about" URL path.</li>
                <li><b>Dynamic Routes:</b> Next.js allows you to create dynamic routes by using brackets ([ ]) in the file name or directory structure. For example, a file named "[id].js" can match routes like "/posts/1" or "/users/john". The dynamic segments are accessible as parameters in the page component and can be used to fetch data or customize the content.</li>
                <li><b>Link Component:</b> Next.js provides the {'<Link>'} component, which enables client-side navigation between pages. It ensures that the page transition is handled gracefully, without full page reloads. You can use the {'<Link>'} component to create anchor tags ({'<a>'}) with client-side routing behavior.</li>
                <li><b>Programmatic Navigation:</b> Next.js also offers programmatic navigation through the useRouter hook. It allows you to access the router object, which provides methods like push(), replace(), and back() to navigate programmatically within your application.</li>
                <li><b>Code Splitting:</b> Next.js automatically performs code splitting, which means that only the JavaScript and CSS needed for the current page are loaded. This helps optimize the initial page load time and improves performance.</li>
              </ol>
              <p>These are some of the fundamental features and concepts of the App Router in Next.js. However, it's important to note that newer versions of Next.js may introduce additional enhancements or changes to the App Router. To stay updated on the latest features and changes, I recommend referring to the official Next.js documentation or the Next.js GitHub repository.</p>
            </div>
            <div
              className="font-inter font-normal text-[12px] sm:text-[14px] leading-[1] mt-4"
              style={{ letterSpacing: '-0.006em', color: '#808080', width: '100%' }}
            >
              Last updated: 20/08/2023
            </div>
          </>
        ) : (
          <p className="text-gray-400 dark:text-gray-400">{notebook.content}</p>
        )}
      </div>
    </div>
  );
}
