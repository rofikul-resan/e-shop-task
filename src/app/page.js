import Banner from "./_homeComponents/Banner";
import ContactForm from "./_homeComponents/ContactForm";
import ProductContainer from "./_homeComponents/ProductContainer";
import Testimonial from "./_homeComponents/Testimonial";

export default function Home() {
  return (
    <section>
      <Banner />
      <ProductContainer />
      <Testimonial />
      <ContactForm />
    </section>
  );
}
