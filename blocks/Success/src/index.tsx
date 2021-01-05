import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';
import styles from './index.module.css';

const Exception = () => {
  const onBackClick = () => {
    console.log('back');
  };
  return (
    <View className={styles.wrap}>
      <Picture className={styles.pic} source={{ uri: 'https://img.alicdn.com/imgextra/i1/O1CN01iudQ1c1IrJKIQVWOw_!!6000000000946-2-tps-270-150.png' }} />
      <Text className={styles.title}>办理成功</Text>
      <Text className={styles.subTitle}>你已于 2020.12.26 办理业务成功~</Text>
      <View className={styles.backBtn} onClick={onBackClick}>返回</View>
    </View>
  );
};

export default Exception;
