import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.module.css';

import Logo from '@/components/Logo';
<%_ if (targets.includes('miniapp') || targets.includes('wechat-miniprogram')) { -%>
import Card from '../../miniapp-compiled/Card/index';
<%_ } %>

export default function Home() {
  return (
    <View className={styles.homeContainer}>
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className={styles.homeTitle}>Welcome to Your Rax App</Text>
      <Text className={styles.homeInfo}>More information about Rax</Text>
      <Text className={styles.homeInfo}>Visit https://rax.js.org</Text>
      <%_ if (targets.includes('miniapp') || targets.includes('wechat-miniprogram')) { -%>
      <Card title="这是一个 Rax 小程序编译时组件" content="详情查看 https://rax.js.org/docs/guide/dual-engine-mix" />
      <%_ } %>
    </View>
  );
}
