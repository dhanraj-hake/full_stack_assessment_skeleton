import React, { useState } from "react";
import EditUserModal from "./EditUserModal";

const HomeCard = ({ home }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="border p-4 rounded h-full w-full flex flex-col justify-between items-start">
      <div>
        <h3 className="text-lg font-bold">{home.street_address}</h3>
        <p className="m-0">List Price: {home.list_price}</p>
        <p className="m-0">State: {home.state}</p>
        <p className="m-0">Zip: {home.zip}</p>
        <p className="m-0">Beds: {home.beds}</p>
        <p className="m-0">Baths: {home.baths}</p>
      </div>

      <button
        className="bg-blue-500 text-white rounded px-4 py-2 mt-2"
        onClick={() => setModalOpen(true)}
      >
        Edit Users
      </button>

      {isModalOpen && (
        <EditUserModal
          street_address={home.street_address}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default HomeCard;
