import "./count.css";

import PropTypes from "prop-types";

function Count({ title, number }) {
  return (
    <div className="counter">
      <p className="counter-number">{number}</p>
      <h3 className="counter-title">{title}</h3>
    </div>
  );
}

Count.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default Count;
