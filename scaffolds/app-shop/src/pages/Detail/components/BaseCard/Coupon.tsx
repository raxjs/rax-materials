import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './Coupon.module.css';

function Coupon() {
  return (
    <View className={styles.container}>
      <View className={styles.coupon}>
        <Text className={styles.couponText}>淘金币可抵8.94元</Text>
        <Text className={styles.couponText}>店铺券满355减25</Text>
      </View>
      <View className={styles.button}>
        <Text className={styles.buttonText}>领券</Text>
        <Image className={styles.buttonIcon} source={{ uri: 'https://img.alicdn.com/imgextra/i2/O1CN01Lnk0v51qhPkpLfTww_!!6000000005527-2-tps-64-64.png' }} />
      </View>
    </View>
  );
}

export default Coupon;
