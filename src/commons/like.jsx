import React from "react";

const Like = (props) => {
  let classLabel = "fa fa-heart";
  if (!props.liked) classLabel += "-o";
  return (
    <i
      onClick={props.onLike}
      style={{ cursor: "pointer" }}
      className={classLabel}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
