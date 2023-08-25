import React, { ChangeEvent } from 'react';

interface ContactFormProps {
  formData: {
    firstName: string;
    lastName: string;
  };
  handleFormData: (event: ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onHide: () => void;
  errors?: {
    firstName?: string;
    lastName?: string;
  };
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const { formData, handleFormData, onSave, onHide, errors } = props;

  return (
    <div className='mx-auto  text-center my-4 bg-slate-200 py-10 px-16 rounded-lg'>
      <div className="mt-3 mb-1">
        <label htmlFor="firstName">First Name*: </label>
        <input
        className='py-1 px-3 ml-2.5'
          value={formData?.firstName}
          id="firstName"
          type="text"
        
          onChange={handleFormData}
        />
      </div>
       <p className="h-3 text-xs text-red-500">{errors?.firstName && errors.firstName}</p>

      <div className="mt-3 mb-1">
        <label htmlFor="lastName">Last Name*: </label>
        <input
         className='py-1 px-3 ml-2.5'
          value={formData?.lastName}
          id="lastName"
          type="text"
        
          onChange={handleFormData}
        />
      </div>
       <p className="h-3 text-xs text-red-500">{errors?.lastName && errors.lastName}</p>

     <div className='text-right mt-5'>
     <button className="bg-blue px-4 py-2 text-white rounded" onClick={onSave}>
        Save
      </button>
      <button className="bg-blue px-4 py-2 text-white rounded ml-3" onClick={onHide}>
        Cancel
      </button>
     </div>
    </div>
  );
};

export default ContactForm;
