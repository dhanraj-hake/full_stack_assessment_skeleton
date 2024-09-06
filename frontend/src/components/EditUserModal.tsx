import React, { useState, useEffect } from "react";
import {
  useGetUsersForHomeQuery,
  useGetUsersQuery,
  useUpdateUsersForHomeMutation,
} from "../features/api/apiSlice";
import Skeleton from "react-loading-skeleton";

const EditUserModal = ({ street_address, onClose }) => {
  const { data: users, isLoading: loadingAllUsers } =
    useGetUsersForHomeQuery(street_address);
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const [updateUsersForHome, { isLoading: isUpdating }] =
    useUpdateUsersForHomeMutation();
  const { data: allUsers, isLoading: usersLoading } = useGetUsersQuery([]);

  useEffect(() => {
    if (users) {
      setSelectedUsers(users?.map((user) => user.username));
    }
  }, [users]);

  const handleToggleUser = (username: string) => {
    if (selectedUsers.includes(username)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== username));
    } else {
      setSelectedUsers([...selectedUsers, username]);
    }
  };

  const checkUsesrRegistered = (user) => {
    for (let username of selectedUsers) {
      if (username === user.username) {
        return true;
      }
    }
    return false;
  };

  const handleSave = async () => {
    if (selectedUsers.length === 0) {
      alert("At least one user must be selected.");
      return;
    }

    await updateUsersForHome({ street_address, usernames: selectedUsers });
    console.log(selectedUsers);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      tabIndex={-1}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="p-4 border-b flex justify-between items-center">
          <h5 className="text-lg font-bold">
            Modify Users for: {street_address}
          </h5>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            &#x2715;
          </button>
        </div>

        <div className="p-4">
          {loadingAllUsers || usersLoading || isUpdating ? (
            <Skeleton count={5} />
          ) : (
            <div>
              {allUsers?.map((user) => (
                <label
                  key={user.username}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    checked={checkUsesrRegistered(user)}
                    onChange={() => handleToggleUser(user.username)}
                  />
                  <span>{user.username}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t flex justify-end space-x-2">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={` ${isUpdating || selectedUsers.length === 0 ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white' }  px-4 py-2 rounded`}
            onClick={handleSave}
            disabled={isUpdating || selectedUsers.length === 0}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
