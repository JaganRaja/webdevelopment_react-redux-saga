import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions/user";
import Card from "./Card";

const Users = () => {
  // The useDispatch returns a dispatch reference from the store we created,
  // while the useSelector allows us to extract data from the store.
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducers.users);
  const loading = useSelector((state) => state.usersReducers.loading);
  const error = useSelector((state) => state.usersReducers.error);

  useEffect(() => {
    console.log("use effect");
    dispatch(getUser());
  }, [dispatch]);
  return (
    <>
      {loading === true ? <p>loading....</p> : null}
      {error && <p>something wrong.... {error}</p>}
      {users && users.length > 0 && !error
        ? users.map((user) => <Card user={user} key={user.id} />)
        : !error && loading === false && <p>No users</p>}
    </>
  );
};
export default Users;
