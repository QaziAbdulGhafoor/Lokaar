import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../API/api";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ShowAlert from "./ShowAlert";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: (theme.vars || theme).palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function ReviewForm({ id, setAlert }) {
  const [revData, setRevData] = useState({ rating: 4, review: "" });

  const handleSubmit = async (e) => {
    // /console.log(revData);
    e.preventDefault();
    const res = await api.post(`/listings/${id}/reviews`, revData);
    console.log(res);
    if (res.status === 200) {
      setAlert({ type: "green", message: "Review Added Successfully" });
    }
  };

  const handleChange = (e) => {
    setRevData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const navigate = useNavigate();
  return (
    <>
      <label className="block text-sm font-semibold text-gray-800 mb-2 mt-4">
        Ratings
      </label>
      <StyledRating
        name="rating"
        onChange={handleChange}
        value={revData.rating}
        getLabelText={(value) => customIcons[value].label}
        slotProps={{ icon: { component: IconContainer } }}
        highlightSelectedOnly
      />
      <label className="block text-sm font-semibold text-gray-800 mb-2 mt-4">
        Review
      </label>
      <textarea
        value={revData.review}
        name="review"
        onChange={handleChange}
        rows={4}
        placeholder="Describe your service, what's included, and what makes you unique..."
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm sm:text-base text-gray-700 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button className="blue-btn my-3" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}
