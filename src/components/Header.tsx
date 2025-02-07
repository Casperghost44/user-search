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
