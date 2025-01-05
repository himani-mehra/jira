import React from "react";
import AvatarGroup from "@atlaskit/avatar-group";
import { getFreeToUseAvatarImage, RANDOM_USERS } from "../../data"; // Adjust path if necessary

const AvatarGroupStackExample = () => {
  const data = RANDOM_USERS.map((d, i) => ({
    key: d.email,
    name: d.name,
    href: "#",
    src: getFreeToUseAvatarImage(i),
  }));

  return <AvatarGroup appearance="stack" data={data} size="medium" />;
};

export default AvatarGroupStackExample;
