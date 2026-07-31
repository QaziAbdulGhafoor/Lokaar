import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import NewForm from "./NewStep1";

const NewListing = () => {
  const user = useContext(AuthContext);
  return <div>{user.user ? <NewForm /> : "not a user"}</div>;
};

export default NewListing;
