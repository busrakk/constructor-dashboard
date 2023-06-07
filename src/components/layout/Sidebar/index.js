import React, { useState } from "react";
import {
  CATEGORİES_ICON,
  COMMENTS_ICON,
  DASHBOARD_ICON,
  FILE_ICON,
  MEDIA_ICON,
  PEOPLE_ICON,
  POSTS_ICON,
  SETTING_ICON,
  TAGS_ICON,
} from "../../../icons/icons";
import Item from "./item";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="lg:w-[280px] lg:h-[60px] bg-background lg:block hidden">
      <ul class="border-2 border-textColor4/20 rounded-2xl">
        <Item
          icon={
            <DASHBOARD_ICON
              size={22}
              className="text-orange group-hover:text-secondColor/30"
            />
          }
          title="Dashboard"
          count={1}
        />

        <Item
          icon={
            <FILE_ICON
              size={22}
              className="text-green group-hover:text-secondColor/30"
            />
          }
          title="Pages"
          count={3}
        />

        <Item
          icon={
            <POSTS_ICON
              size={22}
              className="group-hover:text-secondColor/30 text-pink"
            />
          }
          title="Posts"
        />

        <Item
          icon={
            <MEDIA_ICON
              size={22}
              className="group-hover:text-secondColor/30 text-sky"
            />
          }
          title="Media Files"
          count={1}
        />

        <Item
          handleToggle={handleToggle}
          icon={
            <PEOPLE_ICON
              size={22}
              className="group-hover:text-secondColor/30 text-yellow"
            />
          }
          title="Users"
          count={1}
          isOpen={isOpen}
        />

        <Item
          icon={
            <CATEGORİES_ICON
              size={22}
              className="group-hover:text-secondColor/30 text-blue"
            />
          }
          title="Categories"
          count={1}
        />

        <Item
          icon={
            <TAGS_ICON
              size={22}
              className="group-hover:text-secondColor/30 text-orange"
            />
          }
          title="Tags"
          count={1}
        />

        <Item
          icon={
            <COMMENTS_ICON
              size={22}
              className="group-hover:text-secondColor/30 text-cyan"
            />
          }
          title="Comments"
          count={1}
        />

        <Item
          icon={
            <SETTING_ICON
              size={22}
              className="group-hover:text-secondColor/30 text-yellow"
            />
          }
          title="Settings"
          count={0}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
