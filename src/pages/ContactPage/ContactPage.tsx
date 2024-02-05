import Page from "../../components/Page/Page";
import styles from "./ContactPage.module.css";

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
        </div>
      }
    />
  );
};
export default ContactPage;
