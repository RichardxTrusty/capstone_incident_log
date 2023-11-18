import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
function DyanmicIncidentLogForm({ onChange }) {
  const onFinish = (values, onChange) => {
    console.log("Received values of form:", values);
    onChange(values);
  };
  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={(values) => onFinish(values, onChange)}
      style={{
        maxWidth: 600,
      }}
      autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: "flex",
                  marginBottom: 8,
                }}
                align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, "incident_log"]}
                  rules={[
                    {
                      required: true,
                      message: "Missing log information",
                    },
                  ]}>
                  <Input placeholder="Incendent Log" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
export default DyanmicIncidentLogForm;
