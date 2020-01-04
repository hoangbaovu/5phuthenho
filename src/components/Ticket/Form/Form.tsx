import { withFormik } from "formik";
import InnerForm from './InnerForm';
import * as Yup from "yup";
import moment from 'moment';

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Bạn hãy nhập họ và tên.')
    .min(6, 'Họ và tên phải có tối thiểu 6 ký tự.')
    .max(45, 'Họ và tên có tối đa 45 ký tự.'),
  birthday: Yup.string()
    .required('Bạn hãy nhập ngày sinh')
});

const dateFormat = 'DD/MM/YYYY';

const TicketForm = withFormik({
  mapPropsToValues({ fullname, gender, birthday }: any) {
    return {
      fullname: fullname || "",
      gender: gender || "male",
      birthday: birthday || moment(new Date(), dateFormat),
    };
  },
  validationSchema: SignupSchema,
  handleSubmit(values, { resetForm, setErrors, setSubmitting }): void {
    setSubmitting(true);

    // make async call;

    console.log("Form values", values);
    setSubmitting(false);
  }
})(InnerForm);

export default TicketForm;