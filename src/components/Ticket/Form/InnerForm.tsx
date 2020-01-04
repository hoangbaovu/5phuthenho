import React from 'react';
import { Button, Input, Form, Icon, Radio, DatePicker } from "antd";
import { Form as FormikForm, Field, ErrorMessage } from "formik";
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';

const InnerForm = ({
  props,
  values,
  errors,
  touched,
  setFieldTouched,
  setFieldValue,
  isSubmitting,
  handleSubmit,
}: any) => {
  return (
    <FormikForm onSubmit={handleSubmit}>
      <Form.Item label="Họ và tên">
        <Field
          name="fullname"
          placeholder="Nhập họ và tên"
        >
          {
            ({ field }: any) => <Input prefix={<Icon type="user" />} {...field} />
          }
        </Field>
        <ErrorMessage name="fullname" />
      </Form.Item>

      <Form.Item label="Ngày tháng năm sinh (chỉ nhận hồ sơ của các bạn có độ tuổi từ 18-39)">
        <Field
          name="birthday"
          placeholder="Nhập ngày tháng năm sinh"
        >
          {
            ({ field }: any) => <DatePicker
              {...field}
              onChange={(value: string) => setFieldValue("birthday", value)}
              onBlur={() => setFieldTouched("birthday", true)}
              format={dateFormat}
              value={values.birthday}
              placeholder="Nhập ngày sinh"
              showToday={false}
            />
          }
        </Field>
        <ErrorMessage name="birthday" />
      </Form.Item>

      <Form.Item label="Bạn là ...">
        <Field
          name="gender"
        >
          {
            ({ field }: any) => {
              return (
                <Radio.Group
                  {...field}
                  onChange={value => setFieldValue("gender", value.target.value)}
                  onBlur={() => setFieldTouched("gender", true)}
                  value={values.gender}
                >
                  <Radio key={1} value="male">
                    Nam
                    </Radio>
                  <Radio key={2} value="female">
                    Nữ
                    </Radio>
                </Radio.Group>
              )
            }
          }
        </Field>
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

export default InnerForm;