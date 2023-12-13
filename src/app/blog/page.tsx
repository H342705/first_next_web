import Link from "next/link";
import { data } from "../../../public/mydata";
const Blog = () => {
  const mydata = data;
  return (
    <main className="grid grid-cols-4 space-x-2 space-y-2 bg-sky-300">
      {mydata.map((e) => (
        <Link
          href={`/blog/${e.slug}`}
          key={e.id}
          className="text-blue-700 text-center py-2 rounded-md hover:bg-blue-400 hover:text-white"
        >
          {e.title}
        </Link>
      ))}
    </main>
  );
};
export default Blog;
