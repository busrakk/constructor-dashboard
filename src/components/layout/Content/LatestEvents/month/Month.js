import React from "react";
import Item from "./Item";
import {
  CATEGORİES_ICON,
  FILE_ICON,
  MEDIA_ICON,
  MESSAGE_ICON,
  PEOPLE_ICON,
} from "../../../../../icons/icons";

const Month = () => {
  return (
    <ol className="px-4">
      <Item
        icon={<FILE_ICON size={22} />}
        badges={["11:32", "New Page", "May Padilla"]}
        title="About Page Company"
        color="green"
      />
      <Item
        icon={<MESSAGE_ICON size={22} />}
        badges={["11:20", "New Comment", "Erik Pittman"]}
        content="You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer …"
        color="purple"
      />
      <Item
        icon={<CATEGORİES_ICON size={22} />}
        badges={["11:20", "New Comment", "Erik Pittman"]}
        title="Category «Templates»"
        color="blue"
      />
      <Item
        icon={<PEOPLE_ICON size={22} />}
        badges={["11:20", "New User", "Erik Pittman"]}
        title="New User Alberta Colon"
        color="orange"
      />
      <Item
        icon={<MEDIA_ICON size={22} />}
        badges={["11:20", "New User", "Erik Pittman"]}
        title="Add New Post «Second Post»"
        content="You might remember the Dell computer commercials in which a youth reports this exciting news to his friends..."
        color="pink"
      />
    </ol>
  );
};

export default Month;
