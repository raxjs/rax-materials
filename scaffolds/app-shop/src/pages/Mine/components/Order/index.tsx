import { createElement } from 'rax';
import View from 'rax-view';
import Header from './Header';
import Card from './Card';

import styles from './index.module.css';

function Order() {
  return (
    <View className={styles.container}>
      <Header />
      <View className={styles.body}>
        <Card count={0} title="待付款" icon="https://gw.alicdn.com/tfs/TB135Ipp.H1gK0jSZSyXXXtlpXa-87-87.png_60x60q90_.webp" />
        <Card count={3} title="待发货" icon="https://gw.alicdn.com/tfs/TB1DdAqp.Y1gK0jSZFMXXaWcVXa-87-87.png_60x60q90_.webp" />
        <Card count={1} title="待收货" icon="https://gw.alicdn.com/tfs/TB1b3zgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp" />
        <Card count={7} title="评价" icon="https://gw.alicdn.com/tfs/TB1fOKqm_tYBeNjy1XdXXXXyVXa-87-87.png_60x60q90_.webp" />
        <Card count={0} title="退款/售后" icon="https://gw.alicdn.com/tfs/TB1fMzgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp" />
      </View>
    </View>
  );
}

export default Order;
