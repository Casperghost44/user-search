const Footer = ({ darkTheme }: { darkTheme: boolean }) => {
  return (
    <footer
      className={
        darkTheme
          ? "py-5 bg-[#212121] text-[#eee] mt-auto"
          : "py-5 bg-[#4dabf7] text-[#eee] mt-auto"
      }
    >
      <div className="sm:text-base text-sm text-center">
        Web application created by{" "}
        <a
          href="https://artemmesh.info"
          target="_blank"
          className="text-white inline-block pb-1 border-b hover:border-transparent transition-all"
        >
          Artem Meshcheryakov
        </a>{" "}
        for skill demonstaration purposes.
      </div>
    </footer>
  );
};

export default Footer;
