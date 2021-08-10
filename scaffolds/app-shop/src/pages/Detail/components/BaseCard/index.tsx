import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Price from './Price';
import Coupon from './Coupon';

import styles from './index.module.css';

function BaseCard() {
  return (
    <View className={styles.container}>
      <Price />
      <Coupon />
      <Text className={styles.title}>手机淘宝 随时随地，想淘就淘。手机淘宝 随时随地，想淘就淘。</Text>
    </View>
  );
}

export default BaseCard;
