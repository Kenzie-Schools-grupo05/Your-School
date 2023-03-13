/* eslint-disable import/no-unresolved */
import iInput from "./type";

const Input = ({ name, disabled, defaultValue, register, type, classStyle }: iInput) => (
  
    <input
      type={type}
      id={name}
      {...register(name)}
      disabled={disabled}
      defaultValue={defaultValue}
      className={classStyle}
    />
 
);

export default Input;
