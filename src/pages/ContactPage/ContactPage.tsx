import Page from "../../components/Page/Page";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactPage = () => {
  return (
    <Page
      id="contact"
      content={
        <div>
          <p>
            Feel free to contact me by sending me an email and I will get back
            to you as soon as possible.
          </p>
          <FontAwesomeIcon icon={faBrands} />
        </div>
      }
    />
  );
};
export default ContactPage;
