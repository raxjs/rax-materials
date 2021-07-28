import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './Card.module.css';

function Card() {
  return (
    <View className={styles.container}>
      <Image className={styles.image} source={{ uri: 'https://gw.alicdn.com/bao/uploaded/i1/683495160/O1CN013Xsm0l1nzKJZiST6h_!!683495160-0-lubanu-s.jpg_320x320q90.jpg_.webp' }} />
      <Text className={styles.name}>
        TransArt 变形玩具金刚 滑板猩猩 队长 TA 猛兽侠BW系列野兽战争
      </Text>
      <View className={styles.info}>
        <Text className={styles.price}>￥ 20</Text>
        <Text className={styles.extra}>21人已购买</Text>
      </View>
    </View>
  );
}

export default Card;
