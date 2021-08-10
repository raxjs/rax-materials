import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Title from './Title';

// mock data
import data from './data.json';

import styles from './Comment.module.css';

function Comment() {
  return (
    <View>
      <Title name="宝贝评价(78)" />
      <View className={styles.tags}>
        {data.tags.map((tag) => {
          return (
            <Text className={styles.tag} key={tag}>{tag}</Text>
          );
        })}
      </View>
      <View>
        {data.comments.map((comment) => {
          return (
            <View key={comment.comment} className={styles.comment}>
              <View className={styles.info} >
                <Image className={styles.avatar} source={{ uri: comment.avatar }} />
                <View>
                  <Text className={styles.name}>{comment.name}</Text>
                  <Text className={styles.time}>{comment.timeString}</Text>
                </View>
              </View>
              <Text className={styles.commentText}>{comment.comment}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default Comment;
