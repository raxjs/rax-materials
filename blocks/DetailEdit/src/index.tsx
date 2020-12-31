import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import styles from './index.module.css';

const textInputStyles = {
  borderWidth: '1rpx',
  borderColor: '#ddd',
  flex: 1,
  fontSize: '26rpx',
  height: '100rpx',
  padding: '8rpx',
  marginBottom: '8rpx',
};

const InfoEdit = () => {
  const [text, setText] = useState();

  const onSubmit = () => {
    console.log('text', text);
  };

  const onCancel = () => {
    console.log('onCancel');
  };

  return (
    <View>
      <View className={styles.header}>
        <Text className={styles.btn} onClick={onCancel}>取消</Text>
        <Text className={styles.title}>修改账号简介</Text>
        <Text className={styles.submitBtn} onClick={onSubmit}>完成</Text>
      </View>
      <View className={styles.textInput}>
        <TextInput
          multiline
          style={textInputStyles}
          value={text}
          numberOfLines={3}
          onChangeText={(value) => setText(value)}
        />
      </View>
    </View>
  );
};

export default InfoEdit;
