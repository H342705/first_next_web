const Page = () => {
  return (
    <div className="flex flex-col h-screen bg-sky-300 items-center justify-center space-y-2">
      <div className="text-6xl text-blue-700 font-bold font-mono">Welcome</div>
      <div className="text-2xl text-blue-700 font-sans">
        To My First Website
      </div>
      <p className="text-blue-700 font-sans">
        Thank you for visiting my first website. Navigate to the Blog section
        from the navbar to
        <br />
        explore dynamically rendered data. I will be launching my first
        portfolio website very soon.
      </p>
    </div>
  );
};
export default Page;
