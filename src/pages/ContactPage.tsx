import { PageContainer } from "../components/UI";
import { useRef } from "react";
import useShouldRender from "../hooks/useShouldRender";
import ContactPageContent from "../components/ContactPageContent";

const words = [
  "Want to work with me?",
  "or know more...",
  "find me at: ",
  "sqing73@gmail.com",
];

const ContactPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldRenderContent = useShouldRender(ref);
  return (
    <PageContainer ref={ref}>
      {shouldRenderContent && <ContactPageContent words={words} />}
    </PageContainer>
  );
};

export default ContactPage;
