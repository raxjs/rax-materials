import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';

import './index.css';

const UserInfo = () => {
  return (
    <View className="wrap">
      <Picture className="avatar" source={{ uri: 'https://img.alicdn.com/imgextra/i4/O1CN017JNL7U1POdqCZ7cJZ_!!6000000001831-2-tps-140-140.png' }} />
      <View className="content">
        <View className="row">
          <Text className="nickname">草莓夹心酱</Text>
          <Picture className="icon" source={{ uri: 'https://img.alicdn.com/imgextra/i2/O1CN01AgkCqW22rk1KOEncr_!!6000000007174-2-tps-32-32.png' }} />
        </View>
        <Text className="desc">我是一个爱穿搭，爱跳舞的淘同学，快来找我玩</Text>
        <View className="detail">
          <View className="detail-item">
            <Text className="number">452</Text>
            <Text className="text">关注</Text>
          </View>
          <View className="detail-item">
            <Text className="number">212</Text>
            <Text className="text">粉丝</Text>
          </View>
          <View className="detail-item">
            <Text className="number">124</Text>
            <Text className="text">作品</Text>
          </View>
        </View>
      </View>
      <Picture className="arrow" source={{ uri: 'https://img.alicdn.com/imgextra/i2/O1CN01DuirLv1IdZRcoR71K_!!6000000000916-2-tps-12-20.png' }} />
    </View>
  );
};

export default UserInfo;
