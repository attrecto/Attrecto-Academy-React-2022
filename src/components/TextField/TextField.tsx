import { Field } from "formik";
import React from "react";

interface TextFieldProps {
    label: string;
    name: string;
}

const TextFiled = ({label, name}: 
     TextFieldProps) => {
      console.log(name);
  return (
     <div className="form-group">
      <label className="mb-1">{label}</label>
      <Field name={name} type="text" className="form-control" />
    </div>
  );
};

export default TextFiled;
