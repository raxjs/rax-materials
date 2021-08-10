import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './index.module.css';

function StoreCard() {
  return (
    <View className={styles.container}>
      <View className={styles.wrap}>
        <Image className={styles.avatar} source={{ uri: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg' }} />
        <View className={styles.shop}>
          <Text className={styles.name}>手机淘宝</Text>
          <Image className={styles.level} source={{ uri: 'https://gw.alicdn.com/tfs/TB1Gez8ir_I8KJjy1XaXXbsxpXa-132-24.png' }} />
        </View>
        <View >
          <View className={styles.description}>
            <Text className={styles.label}>宝贝描述 5.0</Text>
            <Text className={styles.rank}>高</Text>
          </View>
          <View className={styles.description}>
            <Text className={styles.label}>卖家服务 5.0</Text>
            <Text className={styles.rank}>高</Text>
          </View>
          <View className={styles.description}>
            <Text className={styles.label}>物流服务 5.0</Text>
            <Text className={styles.rank}>高</Text>
          </View>
        </View>
      </View>
      <View className={styles.wrap} style={{ margin: '24rpx 0' }}>
        <Text className={styles.button}>进店逛逛</Text>
        <Text className={styles.button}>全部宝贝</Text>
      </View>
    </View>
  );
}

export default StoreCard;
