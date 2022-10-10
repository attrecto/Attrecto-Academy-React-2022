import { ReactNode } from "react";
import { Field } from "formik";

interface TagFieldProps<T> {
  name: string;
  label: string;
  options: T[];
  getLabel: (item: T) => ReactNode;
}

const TagField = <T extends { id: string | number }>({
  name,
  label,
}: TagFieldProps<T>) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <Field name={name} className="form-control">
        {/* {({form, field}): FieldProps<T>} */}
      </Field>
    </div>
  );
};

export default TagField;
