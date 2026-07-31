import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import NewForm from "./NewForm";

const NewListing = () => {
  const user = useContext(AuthContext);
  //return <div>{user.user ? <NewForm /> : "not a user"}</div>;
  return <NewForm />;
};

export default NewListing;
