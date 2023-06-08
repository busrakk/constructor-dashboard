import React from "react";
import Item from "./Item";

const Card = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
      <Item
        title="Pages"
        number="1 345"
        color="bg-green text-secondColor"
        iconColor="text-green bg-secondColor"
      />
      <Item
        title="Posts"
        number="12 456"
        color="bg-purple text-secondColor"
        iconColor="bg-secondColor text-purple"
      />
      <Item
        title="Users"
        number="21"
        color="bg-orange text-secondColor"
        iconColor="bg-secondColor text-orange"
      />
      <Item
        title="Files"
        number="1 220"
        color="bg-sky text-secondColor"
        iconColor="bg-secondColor text-sky"
      />
      <Item
        title="Categories"
        number="65"
        color="bg-darkBlue text-secondColor"
        iconColor="bg-secondColor text-darkBlue"
      />
      <Item
        title="Comments"
        number="9 876"
        color="text-textColor3 bg-secondColor"
        iconColor="bg-textColor3 text-secondColor"
      />
    </div>
  );
};

export default Card;
