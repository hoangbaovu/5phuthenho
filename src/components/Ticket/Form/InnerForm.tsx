import React, { useState } from 'react';
import { Button, Input, Form, Icon, Radio, DatePicker, Checkbox, Steps } from "antd";
// import { Form as FormikForm, Field, ErrorMessage } from "formik";
import { Field, ErrorMessage } from "formik";
import styled from 'styled-components';

const dateFormat = 'DD/MM/YYYY';

const CustomeErrorMessage = styled.span`
  color: red;
`

const { Step } = Steps;

const steps = [
  {
    id: 1,
    title: 'Về bạn',
  },
  {
    id: 2,
    title: 'Đặt vé',
  }
];

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

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  }

  const prev = () => {
    setCurrent(current - 1);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        {steps[current].id === 1 &&
          <>
            <Form.Item
              label="Họ và tên"
              validateStatus={errors.fullname && touched.fullname ? (
                'error'
              ) : (
                  'success'
                )}
            >
              <Field
                name="fullname"
                placeholder="Nhập họ và tên"
              >
                {
                  ({ field }: any) => <Input size="large" prefix={<Icon type="user" />} {...field} />
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
                  ({ field }: any) => <DatePicker size="large"
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
                        size="large"
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

            <Form.Item
              label="Link facebook của bạn"
              validateStatus={errors.facebook && touched.facebook ? (
                'error'
              ) : (
                  'success'
                )}
            >
              <Field
                name="facebook"
              >
                {
                  ({ field }: any) => <Input size="large" placeholder="facebook.com/5phuthenho" prefix={<Icon type="facebook" theme="filled" />} {...field} />
                }
              </Field>
              <ErrorMessage component={CustomeErrorMessage} name="facebook" />
            </Form.Item>

            <Form.Item>

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
                          <span style={{ color: 'red' }}>Tôi cam kết rằng tôi nằm trong độ tuổi từ 18-39 hoàn toàn phù hợp để tham gia chương trình</span>
                        ) : (
                            <>Tôi cam kết rằng tôi nằm trong độ tuổi từ 18-39 hoàn toàn phù hợp để tham gia chương trình</>
                          )}
                      </Checkbox>
                    )
                  }
                }
              </Field>

            </Form.Item>
          </>
        }
        {steps[current].id === 2 && <div>2</div>}
      </div>
      <div className="steps-action">
        {current > 0 && (
          <Button onClick={() => prev()} size="large" className="steps-action-prev">
            Quay lại
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" htmlType="submit" disabled={isSubmitting} size="large" className="steps-action-submit">
            Đặt vé
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" disabled={isSubmitting} onClick={() => next()} size="large" className="steps-action-next">
            Tiếp tục
          </Button>
        )}
      </div>
      
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </Form>
  );
};

export default InnerForm;
