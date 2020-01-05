import { withFormik } from "formik";
import InnerForm from './InnerForm';
import * as Yup from "yup";
import moment from 'moment';

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Hãy nhập họ và tên.')
    .min(6, 'Họ và tên phải có tối thiểu 6 ký tự.')
    .max(45, 'Họ và tên có tối đa 45 ký tự.'),
  birthday: Yup.date()
    .required('Hãy nhập ngày sinh.')
    .max(new Date(), "Bạn đến từ tương lai ư?")
    .typeError('Hãy nhập ngày sinh.'),
  agreement: Yup.boolean()
    .required('required')
    .oneOf([true], "required"),
});

const dateFormat = 'DD/MM/YYYY';

const TicketForm = withFormik({
  mapPropsToValues({ fullname, gender, birthday, agreement }: any) {
    return {
      fullname: fullname || "",
      gender: gender || "male",
      birthday: birthday || moment(new Date(), dateFormat),
      agreement: agreement || false,
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
