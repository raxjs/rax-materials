import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Avatar from './Avatar';

import styles from './Base.module.css';

function Base() {
  return (
    <View className={styles.container}>
      <View className={styles.left}>
        <Avatar />
        <Text className={styles.name}>Hello World</Text>
      </View>
      <View className={styles.right}>
        <Image className={styles.icon} source={{ uri: 'https://gw.alicdn.com/tfs/TB1tcovekL0gK0jSZFxXXXWHVXa-54-54.png_48x48q90_.webp' }} />
        <Image className={styles.icon} source={{ uri: 'https://gw.alicdn.com/tfs/TB1dbweXwHqK1RjSZFgXXa7JXXa-57-54.png_48x48q90_.webp' }} />
      </View>
    </View >
  );
}

export default Base;
