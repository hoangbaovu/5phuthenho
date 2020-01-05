import React from 'react';
import { Button, Input, Form, Icon, Radio, DatePicker, Checkbox } from "antd";
// import { Form as FormikForm, Field, ErrorMessage } from "formik";
import { Field, ErrorMessage } from "formik";
import styled from 'styled-components';

const dateFormat = 'DD/MM/YYYY';

const CustomeErrorMessage = styled.span`
  color: red;
`

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

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  
  return (
    <Form onSubmit={handleSubmit} {...formItemLayout}>

      <Form.Item
        label="Họ và tên"
        validateStatus={errors.fullname && touched.fullname ? (
          'error'
        ) : (
          'success'
        )}>
        <Field
          name="fullname"
          placeholder="Nhập họ và tên"
        >
          {
            ({ field }: any) => <Input prefix={<Icon type="user" />} {...field} />
          }
        </Field>
        <ErrorMessage component={CustomeErrorMessage} name="fullname" />
      </Form.Item>

      <Form.Item label="Ngày tháng năm sinh" extra="(Chỉ nhận hồ sơ có độ tuổi từ 18-39)">
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
              style={{ width: '100%' }}
            />
          }
        </Field>
        <ErrorMessage component={CustomeErrorMessage} name="birthday" />
      </Form.Item>

      <Form.Item label="Bạn là">
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
        <ErrorMessage component={CustomeErrorMessage} name="gender" />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        
        <Field
          name="agreement"
        >
          {
            ({ field }: any) => {
              return (
                <Checkbox
                  {...field}
                  onChange={value => setFieldValue("agreement", value.target.checked)}
                  onBlur={() => setFieldTouched("agreement", true)}
                  checked={values.agreement}
                >
                  {errors.agreement && touched.agreement ? (
                    <span style={{ color: 'red'}}>Tôi cam kết rằng tôi nằm trong độ tuổi từ 18-39 hoàn toàn phù hợp để tham gia chương trình</span>
                  ) : (
                    <>Tôi cam kết rằng tôi nằm trong độ tuổi từ 18-39 hoàn toàn phù hợp để tham gia chương trình</>
                  )}
                </Checkbox>
              )
            }
          }
        </Field>
        
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
        Submit
        </Button>
      </Form.Item>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </Form>
  );
};

export default InnerForm;
