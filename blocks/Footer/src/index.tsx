import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Link from 'rax-link';
import styles from './index.module.css';

const Footer = () => {
  return (
    <View className={styles.footer}>
      <View className={styles.links}>
        <Link className={styles.link} href="//m.taobao.com">底部链接</Link>
        <Text className={styles.vertical}>|</Text>
        <Link className={styles.link} href="//m.taobao.com">底部链接</Link>
      </View>
      <Text className={styles.copyright}>© 2004-2020 TaoBao.com. All right reserved.</Text>
    </View>
  );
};

export default Footer;
