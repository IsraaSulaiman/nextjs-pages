import React, { useContext, useEffect } from "react";
import { UserContext } from "@/lib/context";

interface Profile {
  name: string;
  id: string;
  avatar: string;
  role: string;
}

function ProfilePage() {
  const { user }: any = useContext(UserContext);
  return <div>{user?.name}</div>;
}

export default ProfilePage;
