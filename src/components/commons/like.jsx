import React from "react";

const Like = ({ onLike, liked }) => {
  let classLabel = "fa fa-heart";
  if (!liked) classLabel += "-o";
  return (
    <i
      onClick={onLike}
      style={{ cursor: "pointer" }}
      className={classLabel}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
