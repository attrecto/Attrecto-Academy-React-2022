import { Field } from "formik";
import { ReactNode } from "react";

interface tagFieldProps<T> {
  label: string;
  name: string;
  options: T[];
  // getLabel: (item: T) => ReactNode;
}

const tagField = <T extends { id: string | number }>({
  name,
  label,
  options
}: tagFieldProps<T>) => {
  return (
    
    <div className="form-group">
      
      <label>{label}</label>
      {/* Csak néhány próbálgatás, formikkal */}
      <Field as='select' name={name}  className="form-control">
        {options.map(option=>{
          return(
            <option key={option.id} value={option.id}>
              {option.id}
            </option>
          )
        })}
        {/* {({form, field}): FieldProps<T>} */}
      </Field>
        
    </div>
  );
};

export default tagField;
