import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';
import styles from './index.module.css';

const Exception = () => {
  const onRefreshClick = () => {
    console.log('Refresh');
  };
  return (
    <View className={styles.wrap}>
      <Picture className={styles.pic} source={{ uri: 'https://img.alicdn.com/imgextra/i1/O1CN01t6iBki1qdI8e7aZjN_!!6000000005518-2-tps-224-224.png' }} />
      <Text className={styles.title}>系统异常</Text>
      <Text className={styles.subTitle}>页面又被挤爆了我的哥...</Text>
      <View className={styles.refreshBtn} onClick={onRefreshClick}>刷新</View>
    </View>
  );
};

export default Exception;
