import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './Favorite.module.css';

function Favorite() {
  return (
    <View className={styles.container}>
      <View className={styles.card}>
        <Text className={styles.count}>123</Text>
        <Text className={styles.label}>收藏夹</Text>
      </View>
      <View className={styles.card}>
        <Text className={styles.count}>123</Text>
        <Text className={styles.label}>关注店铺</Text>
      </View>
      <View className={styles.card}>
        <Text className={styles.count}>123</Text>
        <Text className={styles.label}>足迹</Text>
      </View>
      <View className={styles.card}>
        <Text className={styles.count}>123</Text>
        <Text className={styles.label}>红包卡券</Text>
      </View>
    </View>
  );
}

export default Favorite;
