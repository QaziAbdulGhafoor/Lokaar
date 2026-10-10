import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import NewForm from "./NewForm";
import { ListingContext } from "../../../Context/ListingContext";
import { useNavigate } from "react-router-dom";
import Signup from "../../Auth/Signup";

const NewListing = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { setListing } = useContext(ListingContext);
  useEffect(() => {
    setListing({});
  }, []);
  return <div> {user ? <NewForm /> : <Signup />}</div>;
  // return <NewForm />;
};

export default NewListing;
