import { data } from "../../../../public/mydata";
const singleblog = ({ slug }: { slug: string }) => {
  const impression = data.find((e) => e.slug === slug);
  return impression;
};
const Slug = ({ params }: { params: { slug: string } }) => {
  const useSlug = singleblog(params);
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-sky-300 text-blue-700">
      <h1 className="font-sans text-lg flex flex-row items-center">
        <span className="text-3xl pr-2 underline underline-offset-4 hover:underline-offset-2 hover:cursor-pointer">
          Title:
        </span>{" "}
        {useSlug?.title}
      </h1>
      <p className="font-sans text-lg flex flex-row items-center">
        <span className="text-3xl pr-2 underline underline-offset-4 hover:underline-offset-2 hover:cursor-pointer">
          Description:
        </span>{" "}
        {useSlug?.description}
      </p>
    </main>
  );
};
export default Slug;

export async function generateStaticParams() {
  const usedata = data;

  return usedata.map((e) => ({
    slug: e.slug,
  }));
}
