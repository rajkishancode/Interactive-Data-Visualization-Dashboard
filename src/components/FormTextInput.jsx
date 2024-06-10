function FormTextInput({
  fieldName,
  id,
  placeholder,
  type = "text",
  onChange,
  value,
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {fieldName}
      </label>
      <input
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
}

export default FormTextInput;
/*
              
          
                
                
                

                <FormTextInput 
                fieldName={"First name"}
                placeholder={"First name"}
                type={"text"}
                id={"firstName"}
                value={userDetails.firstName}
                onChange={handleChange}
                />  

                <FormTextInput 
                fieldName={"Last name"}
                placeholder={"Last name"}
                type={"text"}
                id={"lastName"}
                value={userDetails.lastName}
                onChange={handleChange}
                />  


                <FormTextInput 
                fieldName={"Your email"}
                placeholder={"Your email"}
                type={"text"}
                id={"lastName"}
                value={userDetails.lastName}
                onChange={handleChange}
                />  


         <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
        

      
 

*/
