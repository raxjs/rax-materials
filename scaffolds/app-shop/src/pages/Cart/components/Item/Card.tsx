import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './Card.module.css';

function Card() {
  return (
    <View className={styles.container}>
      <Image className={styles.image} source={{ uri: 'https://gw.alicdn.com/imgextra/i4/O1CN011APjrP1bPLtgGLU6n_!!6000000003457-2-tps-1152-1152.png' }} />
      <View className={styles.info}>
        <Text className={styles.name} numberOfLines={2}>手机淘宝 - 随时随地，想淘就淘。手机淘宝 - 随时随地，想淘就淘。手机淘宝 - 随时随地，想淘就淘。</Text>
        <View className={styles.price}>
          <Text className={styles.priceText}>￥520</Text>
          <Text className={styles.countText}>x1</Text>
        </View>
      </View>
    </View>
  );
}

export default Card;
