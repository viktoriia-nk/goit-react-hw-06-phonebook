import s from './ContactList.module.css';
import {deleteContact} from '../../redux/contacts/actions';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state=>state.contacts.items)
  const filter = useSelector(state => state.contacts.filter);


  const searchFilter = () => {
    const normalized = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  return (
    <ul className={s.contList}>
      {searchFilter().map((cont) => (
        <li className={s.contItem} key={cont.id}>
          <p className={s.contText}>
            {cont.name}: {cont.number}
          </p>
          <button
            type="button"
            className={s.contBtn}
            onClick={() => dispatch(deleteContact(cont.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};



export default ContactList;