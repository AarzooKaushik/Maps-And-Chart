interface User {
    firstName: string;
    lastName: string;
  }

interface UserTableProps {
  handleDelete: (index: number) => void;
  handleEdit: (index: number) => void;
    list: User[]; 
    error: boolean;
  }


  const UserTable: React.FC<UserTableProps> = ({ handleEdit, list, error , handleDelete}) => {
  return  <div className="w-full mt-4 overflow-scroll"  style={{ maxHeight: "500px"}}>
    <table className="rounded w-full" style={{minWidth:'600px'}}>
          <thead className="bg-[#ececec] text-left sticky left-0 top-0 ">
            <tr>
              <th className="p-3">Sr. No.</th>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>          
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {list?.length
              ? list.map((it, index) => (
                  <tr className="odd:bg-white even:bg-[#ececec]" key={`${it}-${index}`} >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{it.firstName}</td>
                    <td className="p-3">{it.lastName}</td>
                   
                    <td className="p-2">
                    <button
                        className="bg-blue px-4 py-1 text-white rounded mr-3"
                        onClick={() => handleEdit(index)}
                      >
                       Edit
                      </button>
                      <button
                        className="bg-red-600 px-4 py-1 text-white rounded"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
    </div>
  };
export default UserTable;