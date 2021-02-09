import {useEffect, useMemo, useState} from 'react';

const useForm = (callback, validate) => {
  // const initialValues = {
  //   name: 'aimé',
  // };

  const [values, setValues] = useState({name: 'aimé'});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return useMemo(() => ({
    handleChange,
    handleSubmit,
    values,
    errors,
  }));
};

export default useForm;
