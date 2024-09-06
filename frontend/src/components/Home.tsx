import React, { useState } from "react";
import {
  useGetUsersQuery,
  useGetHomesForUserQuery,
} from "../features/api/apiSlice";
import Skeleton from 'react-loading-skeleton';
import HomeCard from "./HomeCard";

const Homes = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const { data: users, isLoading: usersLoading } = useGetUsersQuery([]);
  const { data: homes, isLoading: homesLoading, isFetching:homesFetching } = useGetHomesForUserQuery(
    selectedUser,
    {
      skip: !selectedUser,
    }
  );

  return (
    <div className="p-4">
      <div className="flex justify-end">
        {usersLoading ? (
          "Loading users..."
        ) : (
          <div className="flex items-center">
            <label htmlFor="select-user" className="mr-2">Select User:</label>
            <select
              id="select-user"
              className="border px-2 py-1 rounded"
              value={selectedUser || ""}
              onChange={(e) => setSelectedUser(e.target.value as string)}
            >
              <option value="" disabled>Select a user</option>
              {users?.map((user) => (
                <option key={user.username} value={user.username}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {!selectedUser && (
        <div className="mt-5">
          <p className="text-center">Nothing to show</p>
        </div>
      )}

      {homesFetching ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((i) => (
            <div className="mb-4" key={i}>
              <Skeleton style={{ height: "160px" }} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {homes?.map((home) => (
            <div className="mb-4" key={home.street_address}>
              <HomeCard home={home} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homes;
