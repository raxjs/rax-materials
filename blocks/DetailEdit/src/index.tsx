import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';

import './index.css';

const styles = {
  multiline: {
    borderWidth: '1rpx',
    borderColor: '#ddd',
    flex: 1,
    fontSize: '26rpx',
    height: '100rpx',
    padding: '8rpx',
    marginBottom: '8rpx',
  },
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
    <View className="wrap">
      <View className="header">
        <Text className="btn" onClick={onCancel}>取消</Text>
        <Text className="title">修改账号简介</Text>
        <Text className="btn submitBtn" onClick={onSubmit}>完成</Text>
      </View>
      <View className="textInput">
        <TextInput
          multiline
          style={styles.multiline}
          value={text}
          numberOfLines={3}
          onChangeText={(value) => setText(value)}
        />
      </View>
    </View>
  );
};

export default InfoEdit;
