import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Title from './Title';

// mock data
import data from './data.json';

import styles from './AskAll.module.css';

function AskAll() {
  return (
    <View className={styles.container}>
      <Title name="问大家(72)" />
      {data.questions.map(((question) => {
        return (
          <View className={styles.item}>
            <View className={styles.question}>
              <Image className={styles.icon} source={{ uri: 'https://gw.alicdn.com/tfs/TB1lneilZLJ8KJjy0FnXXcFDpXa-36-36.png' }} />
              <Text className={styles.questionText}>{question.question}</Text>
            </View>
            <Text className={styles.answer}>{question.answerCount}个回答</Text>
          </View>
        );
      }))}
    </View>
  );
}

export default AskAll;
