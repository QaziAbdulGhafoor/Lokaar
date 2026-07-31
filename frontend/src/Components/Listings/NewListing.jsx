import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const NewListing = () => {
  const user = useContext(AuthContext);
  return (
    <form action="">
      <div>
        <h1>New Form</h1>
      </div>
    </form>
  );
};

export default NewListing;
