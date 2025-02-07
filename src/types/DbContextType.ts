import UserType from "./UserType";

interface DbContextType {
  getAllUsers: () => Promise<UserType[] | undefined>;
}
export default DbContextType;
