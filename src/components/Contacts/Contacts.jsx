import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

function Contacts({ data, onDeleteContact }) {
  return (
    <ul>
      {data.map(contact => {
        return (
          <ContactItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
            key={contact.id}
            onDeleteContact={onDeleteContact}
          ></ContactItem>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
export default Contacts;
