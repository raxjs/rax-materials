import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './Title.module.css';

function Title() {
  return (
    <View className={styles.container}>
      <View className={styles.wrap}>
        <View className={styles.line} />
        <Text className={styles.text}>详情</Text>
      </View>
    </View>
  );
}

export default Title;
