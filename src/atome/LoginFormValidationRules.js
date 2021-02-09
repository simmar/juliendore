export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'name is required';
  } else if (/[^a-zA-Z -]/.test(values.name)) {
    errors.name = 'name is invalid';
  }
  return errors;
}
