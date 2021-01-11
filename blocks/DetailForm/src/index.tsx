import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import { Form, Input, Select, Upload } from '@alifd/meet';
import styles from './index.module.css';

const DetailForm = () => {
  const onSubmit = (value, error) => {
    if (error) {
      return;
    }

    console.log('form value', value);
  };

  return (
    <View>
      <Form
        labelAlign="inset"
        contentAlign="right"
        labelWidth="auto"
        labelTextAlign="right"
        size="small"
        isPreview={false}
        onSubmit={onSubmit}
      >
        <Text className={styles.title}>联系方式</Text>
        <Form.Item hasFeedback label="联系人姓名" required requiredMessage="请输入姓名">
          {/* @ts-ignore */}
          <Input outline={false} name="username" placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item hasFeedback label="联系人手机" required requiredMessage="请输入手机号">
          {/* @ts-ignore */}
          <Input outline={false} name="phone" placeholder="请输入手机号" />
        </Form.Item>
        <Form.Item hasFeedback label="联系人微信" required requiredMessage="请输入微信号">
          {/* @ts-ignore */}
          <Input outline={false} name="wechat" placeholder="请输入微信号" />
        </Form.Item>
        <Text className={styles.title}>认证资料</Text>
        <Form.Item hasFeedback label="身份说明" required requiredMessage="请选择身份说明">
          {/* @ts-ignore */}
          <Select name="identity" dataSource={[{ value: '主播', label: '主播' }]} />
        </Form.Item>
        <Form.Item hasFeedback label="认证图片">
          {/* @ts-ignore */}
          <Upload
            name="photo"
            limit={4}
            action="https://httpbin.org/post"
          />
        </Form.Item>
        <Form.Submit className={styles.submit} type="primary">
          提交
        </Form.Submit>
      </Form>
    </View>
  );
};

export default DetailForm;
