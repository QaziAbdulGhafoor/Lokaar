import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import NewForm from "./NewForm";
import { useNavigate } from "react-router-dom";
import Signup from "../../Components/Login/Signup";

const NewListing = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return <div> {user ? <NewForm /> : <Signup />}</div>;
  // return <NewForm />;
};

export default NewListing;
