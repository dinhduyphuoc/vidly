import React from "react";

const ListGroup = ({
  onItemSelect,
  items,
  selectedItem,
  valueProperty,
  textProperty,
}) => {
  return (
    <ul className="list-group">
      {items.map((genre) => (
        <li
          key={genre[valueProperty]}
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(genre)}
          className={
            selectedItem === genre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
