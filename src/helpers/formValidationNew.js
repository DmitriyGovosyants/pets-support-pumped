import * as Yup from 'yup';

const emailRegEx = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{1,})$/;
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/;
const nameRegEx = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s]*$/;
const cityRegEx = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s]+, [a-zA-Zа-яА-ЯёЁіІїЇєЄ\s]+$/;
const textRegEx = /^[a-zA-Z0-9а-яА-ЯёЁіІїЇєЄ\s]*$/;
const priceRegEx = /^[1-9][0-9]*$/;
const commentsRegEx = /^[0-9a-zA-Zа-яА-ЯёЁіІїЇєЄ!@#$%^&+=*,:;><'"~`?_\-()/.|\s]{8,120}$/;

const isValidDomain = email => {
  const validDomenName = ['com', 'net', 'org', 'ua', 'ru', 'gov', 'ca'];
  const emailChunks = email.split('.')
  const currentDomenName = emailChunks[emailChunks.length - 1];
  if (validDomenName.indexOf(currentDomenName) !== -1) {
    return true;
  }
  return false;
}

const email = Yup.string()
  .trim()
  .required("E-mail is required")
  .matches(emailRegEx, 'E-mail must contain @ and domain name')
  .test(
    'domain-match',
    'Domain must contain only .com, .net, .org, .ua, .ru, .gov, .ca',
    value => isValidDomain(value))
  .max(255)
    
const password = Yup.string()
  .required('Password is required')
  .max(32)
  .matches(
    passwordRegEx,
    "Password must contain min 7 Characters, uppercase, lowercase, number and special case character"
  )
    
const confirmPassword = Yup.string()
  .test('passwords-match', 'Passwords must match', function(value){
    return this.parent.password === value
  })

const name = Yup.string()
  .trim()
  .required('Name is required')
  .min(2)
  .max(16)
  .matches(nameRegEx, "Name must contain only letters")

const city = Yup.string()
  .trim()
  .required('City, Region is required')
  .max(50)
  .matches(cityRegEx, "You should type location in format: City, Region")

const phone = Yup.string()
  .required('Mobile phone is required')
    
const title = Yup.string()
  .trim()
  .required("Title is required")
  .min(2)
  .max(48)
  .matches(textRegEx, 'Title must contain only letters and numbers')

const petName = Yup.string()
  .trim()
  .test(
    'empty-or-2-characters-check',
    'Pet name must be at least 2 characters',
    name => !name || name.length >= 2
  )
  .max(16)
  .matches(nameRegEx, "Pet name must contain only letters")

const birthdate = Yup.number()
  .transform((value) => {
    if (value === 0 || isNaN(value)) {
      return null
    }
    return value;
  })
  .nullable()

const breed = Yup.string()
  .trim()
  .test(
    'empty-or-2-characters-check',
    'Breed must be at least 2 characters',
    breed => !breed || breed.length >= 2)
  .max(24)
  .matches(nameRegEx, "Breed must contain only letters")

const category = Yup.string()
  .required()

const sex = Yup.string()
  .required()

const price = Yup.string()
  .trim()
  .test(
    'empty-or-1-characters-check',
    "Price couldn't start from 0, only numbers",
    price => !price || (price.length >= 1 && price.match(priceRegEx))
  )
  .max(10)

const comments = Yup.string()
  .trim()
  .required()
  .min(8)
  .max(120)
  .matches(commentsRegEx, "Comments should have only 8-120 letters")

export const signInPageOneSchema = Yup.object({
  email,
  password,
  confirmPassword,
});

export const signInPageTwoSchema = Yup.object({
  name,
  city,
  phone,
});

export const loginSchema = Yup.object({
  email,
  password,
});

export const addNoticePageOneSchema = Yup.object({
  category,
  title,
  name: petName,
  birthdate,
  breed,
});

export const addNoticePageTwoSchema = Yup.object({
  sex,
  location: city,
  price,
  comments,
});