import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';
import styles from './index.module.css';

const UserInfo = () => {
  return (
    <View className={styles.wrap}>
      <Picture className={styles.avatar} source={{ uri: 'https://img.alicdn.com/imgextra/i4/O1CN017JNL7U1POdqCZ7cJZ_!!6000000001831-2-tps-140-140.png' }} />
      <View className={styles.content}>
        <View className={styles.row}>
          <Text className={styles.nickname}>草莓夹心酱</Text>
          <Picture className={styles.icon} source={{ uri: 'https://img.alicdn.com/imgextra/i2/O1CN01AgkCqW22rk1KOEncr_!!6000000007174-2-tps-32-32.png' }} />
        </View>
        <Text className={styles.desc}>我是一个爱穿搭，爱跳舞的淘同学，快来找我玩</Text>
        <View className={styles.detail}>
          <View className={styles.detailItem}>
            <Text className={styles.number}>452</Text>
            <Text className={styles.text}>关注</Text>
          </View>
          <View className={styles.detailItem}>
            <Text className={styles.number}>212</Text>
            <Text className={styles.text}>粉丝</Text>
          </View>
          <View className={styles.detailItem}>
            <Text className={styles.number}>124</Text>
            <Text className={styles.text}>作品</Text>
          </View>
        </View>
      </View>
      <Picture className={styles.arrow} source={{ uri: 'https://img.alicdn.com/imgextra/i2/O1CN01DuirLv1IdZRcoR71K_!!6000000000916-2-tps-12-20.png' }} />
    </View>
  );
};

export default UserInfo;
