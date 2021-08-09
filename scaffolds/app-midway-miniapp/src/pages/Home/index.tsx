import { createElement, useState } from 'rax';
import useAsyncEffect from 'rax-use-async-effect';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './index.module.css';
import Logo from '../../components/Logo';
import { hello, getOpenId } from '@/cloud/function';

export default function Home() {
  const [message, setMessage] = useState('');
  const [openId, setOpenId] = useState('');

  useAsyncEffect(async () => {
    const message = await hello('Rax', 'Midway.js');
    setMessage(message);

    const { openId } = await getOpenId();
    setOpenId(`${openId!.substring(0, 3) }***************${ openId!.substring(14)}`);
  }, []);

  return (
    <View className={styles.homeContainer}>
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className={styles.homeTitle}>Welcome to Your Rax App</Text>
      <Text className={styles.homeInfo}>Message: {message}</Text>
      <Text className={styles.homeInfo}>OpenId: {openId}</Text>
    </View>
  );
}
