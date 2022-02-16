import { List, ListEl, StatText } from './Reviews.styled.jsx';


export default function Statistics ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}){

  return (
    <>
      <List>
        <ListEl stats><StatText>Good: </StatText><StatText>{good}</StatText></ListEl>
        <ListEl stats><StatText>Neutral: </StatText><StatText>{neutral}</StatText></ListEl>
        <ListEl stats><StatText>Bad: </StatText><StatText>{bad}</StatText></ListEl>
        <ListEl stats><StatText>Total: </StatText><StatText>{total}</StatText></ListEl>
        <ListEl stats><StatText>Positive Feedback: </StatText><StatText>{positivePercentage}%</StatText></ListEl>
      </List>
    </>
  );
}


