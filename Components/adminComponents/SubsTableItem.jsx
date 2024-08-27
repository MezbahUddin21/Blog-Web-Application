import React from "react";

const SubsTableItem = ({email,mongoId,date, deleteEmail}) => {

    const emailDate=new Date(date);


  return (
    <tr className="bg-slate-50 border-b text-left">
        <th scope="row" className="px-6 py-4 text-gray-900 font-medium whitespace-nowrap">
            {email?email:"No Email"}
        </th>

        <td className="px-6 py-4 hidden sm:block">
            {emailDate.toDateString()}
        </td>
        <td className="px-6 py-4 cursor-pointer text-red-800 text-lg" onClick={()=>deleteEmail(mongoId)}>
            x
        </td>

    </tr>
  )
};

export default SubsTableItem;
