import * as yup from "yup";
const paymentSchema = yup.object().shape({
  email: yup.string().required().email(),
  cardNunmber: yup.string().required().min(5, "Please fill your Data"),
  securityCode: yup.string().required().min(5, "Please fill your Data"),
  nameCard: yup.string().required("Please fill your Data"),
  country: yup.string().required("Please fill your Data"),
  firstName: yup.string().required("Please fill your Data"),
  lastName: yup.string().required("Please fill your Data"),
  address: yup.string().required("Please fill your Data"),
  city: yup.string().required("Please fill your Data"),
  government: yup.string().required("Please fill your Data"),
  postalCode: yup.string().required().min(5, "Please fill your Data"),
  date: yup.string().required().min(5, "Please fill your Data"),
});
export default paymentSchema;
