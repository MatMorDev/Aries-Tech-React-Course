import { useContext } from "react";
import { AuthContext } from "_shared/contexts";

export const UserBar = () => {
  const { user } = useContext(AuthContext);

  return !!user ? (
    <div>
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
      <img src={user.image} placeholder="userpic" />
    </div>
  ) : null;
};
