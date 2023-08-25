import React, { ChangeEvent, useState } from "react";
import ContactForm from "../contactForm";
import UserTable from "./userTable";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

const DEFAULT_OBJECT: User = {
  id: 0, 
  firstName: "",
  lastName: "",
};

const ContactPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<User>(DEFAULT_OBJECT);
  const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(null);

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
  });

  const addData = (newUser: User) => {
    setUsers([...users, newUser]);
    onHide();
  };

  const handleFormData = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const onHide = () => {
    setShowForm(false);
    setFormData(DEFAULT_OBJECT);
    setFormErrors({
      firstName: "",
      lastName: "",
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: "",
      lastName: "",
    };
    let valid = true;

    if (formData.firstName.trim() === "") {
      errors.firstName = "First Name is required.";
      valid = false;
    }
    if (formData.lastName.trim() === "") {
      errors.lastName = "Last Name is required.";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  let counter = 0;

  function generateUniqueId() {
    return counter++;
  }

  const onSave = () => {
    let newFormData = { ...formData };
  
    if (validateForm()) {
      if (currentEditIndex !== null) {
       
        const updatedUsers = users.map((user, index) =>
          index === currentEditIndex ? newFormData : user
        );
        setUsers(updatedUsers);
      } else {
       
        newFormData.id = generateUniqueId();
        addData(newFormData);
      }
  
      onHide();
    }
  };
  

  const editUser = (index: number) => {
    const userToEdit = users[index];
    setShowForm(true);
    setFormData(userToEdit);
    setCurrentEditIndex(index);
  };
  
  const deleteUser = (index: number) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };


  return (
    <>
  <div className="py-4 px-5 overflow-hidden" >
  <div className="flex justify-end ">
     <button
        className="bg-blue px-4 py-2 text-white rounded"
        onClick={() => {
          setShowForm(!showForm);
          setFormData(DEFAULT_OBJECT);
        }}
      >
        Create Contact +
      </button>
     </div>

      <div className={`flex overflow-hidden transition-all ${showForm ? "h-auto" : "h-0"}`}>
        <ContactForm
          formData={formData}
          handleFormData={handleFormData}
          onHide={onHide}
          onSave={onSave}
          errors={formErrors}
        />
      </div>

      {users.length > 0 ? (
          <UserTable
          handleEdit={editUser}    list={users} error={false}  handleDelete={deleteUser} />
        ) : (
          <div className="text-center mt-16">
            <p>No contacts found</p>
            <p>Add new contact from create contact button.</p>
          </div>
        )}
  </div>
    </>
  );
};

export default ContactPage;
