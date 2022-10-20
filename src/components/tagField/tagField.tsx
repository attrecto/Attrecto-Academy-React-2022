import { getByLabelText } from "@testing-library/react";
import classNames from "classnames";
import { Field, FieldProps } from "formik";
import { ReactNode } from "react";
import classes from "./tagField.module.scss";
interface tagFieldProps<T> {
  label: string;
  name: string;
  options: T[]; // Generikus típus: Arra szolgál, h Minél rugalmasabb legyen.
  getLabel: (item: T) => ReactNode;
}

const tagField = <T extends { id: string | number }>({
  name,
  label,
  options,
  getLabel,
}: tagFieldProps<T>) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <Field name={name} className="form-control">
        {/* {({form, field}): FieldProps<T>} */}
        {({ form, field }: FieldProps<T[]>) => (
          <div>
            {options.map((option) => {
              const isSelected = field.value?.find(
                (item) => item.id === option.id
              );

              const handleClick = () =>
                form.setFieldValue(
                  name,
                  isSelected
                    ? field.value?.filter((item) => item.id !== option.id)
                    : [...field.value, { id: option.id }]
                );

              return (
                <span
                  key={option.id}
                  onClick={handleClick}
                  className={classNames(
                    classes.Tag,
                    "badge me-3 mb-1 p-2",
                    isSelected ? "bg-success" : "bg-light text-dark"
                  )}
                >
                  {getLabel(option)}
                </span>
              );
            })}
          </div>
        )}
      </Field>
    </div>
  );
};

export default tagField;
