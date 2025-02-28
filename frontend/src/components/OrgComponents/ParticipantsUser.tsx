"use client";

import React from "react";

const ParticipantsUser = () => {
  return (
    <div className="container  w-[50%] p-4">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                S.N.
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Contact Number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Skill
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Events Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">Mark Otto</td>
              <td className="border border-gray-300 px-4 py-2">
                mark@example.com
              </td>
              <td className="border border-gray-300 px-4 py-2">123-456-7890</td>
              <td className="border border-gray-300 px-4 py-2">JavaScript</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">
                123 Main St, Springfield
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">
                Jacob Thornton
              </td>
              <td className="border border-gray-300 px-4 py-2">
                jacob@example.com
              </td>
              <td className="border border-gray-300 px-4 py-2">987-654-3210</td>
              <td className="border border-gray-300 px-4 py-2">React</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">
                456 Elm St, Metropolis
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">Larry Bird</td>
              <td className="border border-gray-300 px-4 py-2">
                larry@example.com
              </td>
              <td className="border border-gray-300 px-4 py-2">555-123-4567</td>
              <td className="border border-gray-300 px-4 py-2">CSS</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">
                789 Oak St, Gotham
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">Larry Bird</td>
              <td className="border border-gray-300 px-4 py-2">
                larry@example.com
              </td>
              <td className="border border-gray-300 px-4 py-2">555-123-4567</td>
              <td className="border border-gray-300 px-4 py-2">CSS</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">
                789 Oak St, Gotham
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticipantsUser;
