import { useEffect, useState } from "react";
import Header from "./components/Header";
import CenterSearch from "./components/CenterSearch";
import CustonTable from "./components/CustonTable";
import { useDb } from "./hooks/useDb";
import { useQuery } from "@tanstack/react-query";
import Footer from "./components/Footer";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const { getAllUsers } = useDb();

  const { data, isLoading, error } = useQuery({
    queryKey: ["serachData"],
    queryFn: () => getAllUsers(),
  });

  const [users, setUsers] = useState(data);

  const [filter, setFilter] = useState("Name");

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const onSearchChange = (query: string) => {
    setUsers(
      data?.filter((item) => {
        let temp = "";
        if (filter === "Name") {
          const temp = item.name.toLocaleLowerCase();
          return temp.startsWith(query);
        }
        if (filter === "Username") temp = item.username.toLocaleLowerCase();
        return temp.startsWith(query);
      })
    );
  };

  const changeTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <div
      className={
        darkTheme
          ? "bg-[#121212] flex flex-col min-h-screen"
          : "flex flex-col min-h-screen"
      }
    >
      <Header changeTheme={changeTheme} darkTheme={darkTheme} />

      <CenterSearch
        darkTheme={darkTheme}
        onSearchChange={onSearchChange}
        selectedOption={filter}
        setSelectedOption={setFilter}
      />
      <CustonTable
        users={users ? users : []}
        loading={isLoading}
        error={error}
        darkTheme={darkTheme}
      />

      <Footer darkTheme={darkTheme} />
    </div>
  );
}

export default App;
