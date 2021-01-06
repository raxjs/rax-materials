import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';
import styles from './index.module.css';

const Goods = () => {
  return (
    <View className={styles.wrap}>
      <Picture className={styles.pircture} source={{ uri: 'http://gw.alicdn.com/bao/uploaded/i1/1850033064/O1CN01IXM7C11YVM9oZq8VA_!!1850033064-0-lubanu-s.jpg' }} />
      <View className={styles.main}>
        <Text className={styles.title} numberOfLines={1}>川岛屋青蕾日式二人食餐具碗碟套装碗盘创意网红</Text>
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
