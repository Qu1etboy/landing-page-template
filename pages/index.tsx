import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Testinomial from "../components/Testinomial";
import ProductInfoSection from "../components/ProductInfoSection";
import Container from "../components/Container";
import BuyNow from "../components/BuyNow";
import { SimpleContactForm } from "../components/ContactForm";

export default function Home() {
  return (
    <Container>
      <Header />
      <ProductInfoSection />
      <Testinomial />
      <BuyNow />
      <SimpleContactForm />
    </Container>
  );
}
