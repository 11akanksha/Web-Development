import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.emojiName}>
          {props.emojiSymbol}
        </span>
        <span>{props.emojiName}</span>
      </dt>
      <dd>{props.emojiDesc}</dd>
    </div>
  );
}

export default Entry;
