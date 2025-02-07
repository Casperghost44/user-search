import { IconButton } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

const Header = ({
  changeTheme,
  darkTheme,
}: {
  changeTheme: any;
  darkTheme: boolean;
}) => {
  return (
    <header
      className={
        darkTheme
          ? "flex items-center bg-[#212121] px-3 py-6 text-white mb-4"
          : "flex items-center bg-[#4dabf7] px-3 py-6 text-[#eee] mb-4"
      }
    >
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracurrentColorerCarrier"
          stroke-linecurrentcap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_icurrentColoronCarrier">
          {" "}
          <path
            d="M11.9999 20H6.99994C6.44765 20 5.99994 19.5523 5.99994 19V5C5.99994 4.44772 6.44765 4 6.99994 4H17C17.5523 4 18 4.44772 18 5V10M17.4729 17.4525C18.046 16.8743 18.4 16.0785 18.4 15.2C18.4 13.4327 16.9673 12 15.2 12C13.4327 12 12 13.4327 12 15.2C12 16.9673 13.4327 18.4 15.2 18.4C16.0888 18.4 16.893 18.0376 17.4729 17.4525ZM17.4729 17.4525L20 20"
            stroke="currentColor"
            stroke-linecurrentcap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
      <h2 className="sm:text-2xl text-lg text-center font-semibold">
        Searcherity &mdash; find a user easily!
      </h2>
      <IconButton
        aria-label="change-theme"
        onClick={changeTheme}
        sx={{ color: "inherit", ml: "auto" }}
      >
        {darkTheme ? (
          <WbSunnyOutlinedIcon color="inherit" />
        ) : (
          <BedtimeOutlinedIcon color="inherit" />
        )}
      </IconButton>
    </header>
  );
};

export default Header;
