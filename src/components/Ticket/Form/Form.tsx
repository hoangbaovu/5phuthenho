import React from "react";
import { Button, Input, Form, Icon, Radio } from "antd";
import { withFormik, Form as FormikForm, Field as FormikField, ErrorMessage  } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Bạn hãy nhập họ và tên.')
    .min(6, 'Họ và tên phải có tối thiểu 6 ký tự.')
    .max(45, 'Họ và tên có tối đa 45 ký tự.'),
  fruit: Yup.string()
    .required('Fruit is required')
});

const InnerForm = ({
  props,
  values,
  errors,
  touched,
  setFieldTouched,
  setFieldValue,
  isSubmitting,
  handleSubmit
}: any) => {
  return (
    <FormikForm onSubmit={handleSubmit}>
      <Form.Item label="Họ và tên">
        <FormikField
          name="fullname"
        >
          {
            ({field} : any) => <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} {...field} placeholder="Nhập họ và tên" />
          }
        </FormikField>
        <ErrorMessage name="fullname" />
      </Form.Item>
      <Form.Item label="Bạn là ...">
        <FormikField
          name="gender"
        >
          {
            ({field} : any) => {
              return (
                <Radio.Group
                  {...field}
                  onChange={value => setFieldValue("gender", value.target.value)}
                  onBlur={() => setFieldTouched("gender", true)}
                  value={values.gender}
                >
                  <Radio key={1} value="boy">
                    Nam
                  </Radio>
                  <Radio key={2} value="girl">
                    Nữ
                  </Radio>
                </Radio.Group>
              )
            }
          }
        </FormikField>
        <ErrorMessage name="gender" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" disabled={isSubmitting}>
          Submit
        </Button>
      </Form.Item>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </FormikForm>
  );
};

const TicketForm = withFormik({
  mapPropsToValues({ fullname, fruit, gender }: any) {
    return {
      fullname: fullname || "",
      gender: gender || "boy"
    };
  },
  validationSchema: SignupSchema,
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log("Form values", values);
    setSubmitting(false);
  }
})(InnerForm);

export default TicketForm;