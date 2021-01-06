import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Link from 'rax-link';
import Picture from 'rax-picture';
import styles from './index.module.css';

const places = [
  {
    picture: 'http://gw.alicdn.com/bao/uploaded/TB1rJKqIuH2gK0jSZFEXXcqMpXa.jpg',
    title: '智能手表',
    description: '全场2折起',
    url: '//m.taobao.com',
  },
  {
    picture: 'http://gw.alicdn.com/bao/uploaded/TB1Ro.QU2b2gK0jSZK9SuuEgFXa.jpg',
    title: '家用电器',
    description: '抢百元大额券',
  },
  {
    picture: 'http://gw.alicdn.com/bao/uploaded/TB1MeOuXjgy_uJjSZSySuvqvVXa.jpg',
    title: '品质小家电',
    description: '满399减100',
  },
  {
    picture: 'http://gw.alicdn.com/bao/uploaded/TB1rmSis3HqK1RjSZJnSuvNLpXa.jpg',
    title: '电脑办公',
    description: '12期分期免息',
  },
  {
    picture: 'http://gw.alicdn.com/bao/uploaded/TB1OJcUeu3tHKVjSZSgSut4QFXa.jpg',
    title: '厨房大家电',
    description: '买一送一',
  },
  {
    picture: 'http://gw.alicdn.com/bao/uploaded/TB1NQsCakWE3KVjSZSySutocXXa.jpg',
    title: '笔记本',
    description: '5折限量抢',
  },
];

const Places = () => {
  return (
    <View className={styles.wrap}>
      <View className={styles.head}>
        <View className={styles.titleBox}>
          <Text className={styles.title}>
            产业带直供
          </Text>
          <Text className={styles.subTitle}>
            大牌5折起
          </Text>
        </View>
        <Text className={styles.more}>
          更多 &#62;
        </Text>
      </View>
      <View className={styles.main}>
        {places.map(({ picture, title, description, url }) => {
          return (
            <Link className={styles.item} href={url}>
              <View className={styles.pirctureBox}>
                <Picture className={styles.pircture} source={{ uri: picture }} />
              </View>
              <View className={styles.itemTitleBox}>
                <Text className={styles.itemTitle}>
                  {title}
                </Text>
              </View>
              <View className={styles.descriptionBox}>
                <Text className={styles.description}>
                  {description}
                </Text>
              </View>
            </Link>
          );
        })}
      </View>
    </View>
  );
};

export default Places;
