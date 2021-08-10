import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Card from './Card';

import styles from './index.module.css';

function Item() {
  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <Text className={styles.title}>共1件宝贝</Text>
      </View>
      <View className={styles.content}>
        <Card />
      </View>
    </View>
  );
}

export default Item;
