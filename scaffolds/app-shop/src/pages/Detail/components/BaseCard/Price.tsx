import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './Price.module.css';

function Price() {
  return (
    <View className={styles.container}>
      <View className={styles.price}>
        <Text className={styles.priceText} style={{ fontSize: '30rpx' }}>￥</Text>
        <Text className={styles.priceText} style={{ fontSize: '48rpx' }}>999</Text>
      </View>
      <View className={styles.newPrice}>
        <Text className={styles.newPriceText} style={{ fontSize: '22rpx' }}>券后</Text>
        <Text className={styles.newPriceText} style={{ fontSize: '26rpx' }}>￥</Text>
        <Text className={styles.newPriceText} style={{ fontSize: '38rpx' }}>699</Text>
      </View>
    </View>
  );
}

export default Price;
