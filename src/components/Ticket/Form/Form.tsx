import { withFormik } from "formik";
import { message } from "antd";
import InnerForm from './InnerForm';
import * as Yup from "yup";
import moment from 'moment';

const SignupSchema = Yup.object().shape({
  fullname: Yup
    .string()
    .required('Hãy nhập họ và tên.')
    .min(6, 'Họ và tên phải có tối thiểu 6 ký tự.')
    .max(45, 'Họ và tên có tối đa 45 ký tự.'),
  birthday: Yup
    .date()
    .required('Hãy nhập ngày sinh.')
    .max(new Date(), "Bạn đến từ tương lai ư?")
    .typeError('Hãy nhập ngày sinh.'),
  gender: Yup
    .mixed<'male' | 'female' >()
    .oneOf(['male', 'female']),
  agreement: Yup
    .boolean()
    .required('required')
    .oneOf([true], "required"),
  phonenumber: Yup
    .number()
    .required('Hãy nhập số điện thoại liên lạc')
    .max(12, "Số điện thoại không được lớn hơn 12 số"),
  facebook: Yup
    .string()
    .required('Hãy nhập địa chỉ facebook')
    .max(51, "Địa chỉ facebook không lớn hơn 51 kí tự"),
});

const dateFormat = 'DD/MM/YYYY';

message.config({
  top: 100,
  maxCount: 3,
});

const TicketForm = withFormik({
  mapPropsToValues({ fullname, gender, birthday, agreement, phonenumber, facebook }: any) {
    return {
      fullname: fullname || "",
      gender: gender || "male",
      birthday: birthday || moment(new Date(), dateFormat),
      agreement: agreement || false,
      phonenumber: phonenumber || "",
      facebook: facebook || "",
    };
  },
  validationSchema: SignupSchema,
  handleSubmit(values, { resetForm, setErrors, setSubmitting }): void {
    setSubmitting(true);

    // make async call;

    console.log("Form values", values);
    console.log('setErrors', setErrors)
    message.success(`Processing complete! ${JSON.stringify(values)}`);
    setSubmitting(false);
  }
})(InnerForm);

export default TicketForm;
