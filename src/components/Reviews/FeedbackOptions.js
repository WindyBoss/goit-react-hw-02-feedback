import { List, ListEl, Button } from './Reviews.styled.jsx';

export default function Statistics ({
  onLeaveFeedback
}) {
  return (
      <>
        <List buttons>
          <ListEl button><Button value={`good`} onClick={onLeaveFeedback}>Good</Button></ListEl>
          <ListEl button><Button value={`neutral`} onClick={onLeaveFeedback}>Neutral</Button></ListEl>
          <ListEl button><Button value={`bad`} onClick={onLeaveFeedback}>Bad</Button></ListEl>
        </List>
      </>
  );
}
