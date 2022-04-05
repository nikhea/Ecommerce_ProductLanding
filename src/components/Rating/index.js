/* eslint-disable @next/next/no-img-element */
import Rating from "react-rating";
import { MdOutlineStarBorderPurple500, MdOutlineStar } from "react-icons/md";
// import i from "../../assets/images/star-grey.png";
const Ratings = ({ rating }) => {
  return (
    <Rating
      placeholderRating={rating}
      initialRating={rating}
      emptySymbol={<MdOutlineStarBorderPurple500 />}
      placeholderSymbol={<MdOutlineStarBorderPurple500 />}
      fullSymbol={<MdOutlineStar color="#FFD700" />}
    />
  );
};

export default Ratings;
