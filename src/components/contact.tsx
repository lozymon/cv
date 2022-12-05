import { Contact as IContact } from "../interfaces/contact";
import { Title } from "./title";

function contactItem(contact: IContact) {
  return (
    <p className="text-sm">
      {contact.description}: {contact.value}
    </p>
  );
}

function ContactItems(props: { contacts: IContact[] }) {
  const contact = props.contacts.map(contactItem);

  return <>{contact}</>;
}

export function Contact({ title, contacts }: { title: string; contacts: IContact[] }) {
  return (
    <div>
      <Title>{title}</Title>
      <ContactItems contacts={contacts} />
    </div>
  );
}
