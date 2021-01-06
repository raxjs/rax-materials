import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';
import styles from './index.module.css';

const Goods = () => {
  return (
    <View className={styles.wrap}>
      <Picture 
        className={styles.pircture} 
        source={{ uri: 'https://img.alicdn.com/imgextra/i4/O1CN01uU0r8a1fl78S7NfcZ_!!6000000004046-2-tps-684-684.png' }} 
      />
      <View className={styles.main}>
        <Text className={styles.title} numberOfLines={1}>新款短袖印花雪纺裙</Text>
        <Text className={styles.evaluate}>9875个人认为颜色很正</Text>
        <View className={styles.discount}>
          <Text className={styles.discountType}>津贴</Text>
          <Text className={styles.discountDesc}>每满299减40</Text>
        </View>
        <View className={styles.bottom}>
          <Text className={styles.tab}>天猫</Text>

          <View className={styles.price}>
            <Text className={styles.unit}>￥</Text>
            <Text className={styles.value}>239</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Goods;
