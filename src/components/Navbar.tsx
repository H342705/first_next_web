import LinkComp from "./link-comp";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 h-14 w-full text-center items-center flex justify-evenly">
      <LinkComp link="/" name="Home" />
      <LinkComp link="/blog" name="Blog" />
    </nav>
  );
};
export default Navbar;
