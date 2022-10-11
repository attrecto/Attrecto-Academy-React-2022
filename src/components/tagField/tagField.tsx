import { Field } from "formik";
import { ReactNode } from "react";

interface tagFieldProps<T> {
  label: string;
  name: string;
  options: T[];
  getLabel: (item: T) => ReactNode;
}

const tagField = <T extends { id: string | number }>({
  name,
  label,
}: tagFieldProps<T>) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <Field name={name} className="form-control">
        {/* {({form, field}): FieldProps<T>} */}
      </Field>
    </div>
  );
};

export default tagField;
