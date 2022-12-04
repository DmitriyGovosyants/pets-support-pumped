import * as Yup from 'yup';

const emailRegEx = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{1,})$/;
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/;
const textRegEx = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s]*$/;
const cityRegEx = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]+, [a-zA-Zа-яА-ЯёЁіІїЇєЄ]+$/;

const isValidDomain = (email) => {
  const validDomenName = ['com', 'net', 'org', 'ua', 'ru', 'gov', 'ca'];
  const emailChunks = email.split('.')
  const currentDomenName = emailChunks[emailChunks.length - 1];
  if (validDomenName.indexOf(currentDomenName) !== -1) {
    return true;
  }
  return false;
}

const email = Yup.string()
    .required("E-mail is required")
    .matches(emailRegEx, 'email must contain @ and domain name')
    .test('domain-match', 'domain must contain only .com, .net, .org, .ua, .ru, .gov, .ca', (value) => isValidDomain(value))
    .max(255)
    
const password = Yup.string()
    .required('password is required')
    .max(32)
    .matches(
      passwordRegEx,
      "password must contain min 7 Characters, uppercase, lowercase, number and special case character"
    )
    
const confirmPassword = Yup.string()
    .test('passwords-match', 'passwords must match', function(value){
      return this.parent.password === value
    })

const name = Yup.string()
    .required('Name is required')
    .min(2)
    .max(16)
    .matches(textRegEx, "name can contain only letters")

const city = Yup.string()
    .required('City, Region is required')
    .max(50)
    .matches(cityRegEx, "You should type location in format: City, Region")

const phone = Yup.string()
    .required('mobile phone is required')

export const signInSchemaPageOne = Yup.object({
  email,
  password,
  confirmPassword,
});

export const signInSchemaPageTwo = Yup.object({
  name,
  city,
  phone,
});

export const loginSchema = Yup.object({
  email,
  password,
});