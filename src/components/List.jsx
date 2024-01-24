import { useSelector } from 'react-redux';
import ListItem from './ListItem';

export default function List() {
    const {list} = useSelector(state => state.list)
  return (
    <>
        {list.map(listItem => <ListItem key={listItem.id} nameOfService={listItem.nameOfService} price={listItem.price} id={listItem.id}/>)}
    </>
    
  )
}
