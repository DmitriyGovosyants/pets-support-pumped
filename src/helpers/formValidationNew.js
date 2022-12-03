import * as Yup from 'yup';

const emailRegEx = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{1,3})$/;
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/;
const textRegEx = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s]*$/;

const isValidDomain = (email) => {
  const validDomenName = ['com', 'net', 'org', 'ua', 'ru', 'gov', 'ca'];
  const emailChunks = email.split('.')
  const currentDomenName = emailChunks[emailChunks.length - 1];
  if (validDomenName.indexOf(currentDomenName) !== -1) {
    return true;
  }
  return false;
}

export const signInSchemaPageOne = Yup.object({
  email: Yup.string()
    .required("E-mail is required")
    .matches(emailRegEx, 'email must contain @ and domain name')
    .test('is-domain-valid', 'domain must contain only .com, .net, .org, .ua, .ru, .gov, .ca', (value) => isValidDomain(value))
    .max(255),
  password: Yup.string()
    .required('password is required')
    .max(32)
    .matches(
      passwordRegEx,
      "password must contain min 7 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .test('passwords-match', 'passwords must match', function(value){
      return this.parent.password === value
    }),
});

export const signInSchemaPageTwo = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2)
    .max(16)
    .matches(textRegEx, "name can contain only letters and numbers"),
  city: Yup.string()
    .required('City, Region is required'),
  phone: Yup.string()
    .required('mobile phone is required'),
});