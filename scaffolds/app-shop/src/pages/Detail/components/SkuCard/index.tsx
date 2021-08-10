import { createElement } from 'rax';
import View from 'rax-view';
import Item from './Item';

import styles from './index.module.css';

function SkuCard() {
  return (
    <View className={styles.container}>
      <Item label="选择" content={['颜色分类']} />
      <Item label="发货" content={['北京', '快递：快递包邮']} extra="月销4" />
      <Item label="保障" content={['付款后48小时内发货 · 订单险 · 7天无理由 · 运费险']} />
      <Item label="参数" content={['适用年龄 颜色分类']} />
    </View>
  );
}

export default SkuCard;
