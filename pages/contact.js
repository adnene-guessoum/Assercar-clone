import Section from '../components/section';
import ContactTable from '../components/ContactTable';
import { Paragraph, Titre } from '../components/paragraph';
import { Container, Flex, Divider, Image } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <Flex direction="column" p={5} ml="280px" w="93%">
      <Container>
        <Image src="/images/moto.png" alt="bannière accueil" />
        <Divider mt={18} mb={18} />
      </Container>

      <Section delay={0.2}>
        <Flex gap={3} justify="center" align="center">
          <Image
            src="/images/contact/contact.gif"
            alt="illustration contact"
            h="100px"
          />
          <Flex direction="column" justify="center" align="center">
            <Titre>Adresse postale :</Titre>
            <Paragraph>ASSERCAR, 150 rue Legendre, 75017 PARIS</Paragraph>
          </Flex>
        </Flex>
        <Divider mt={18} />
      </Section>

      <Section delay={0.4}>
        <ContactTable />
      </Section>
    </Flex>
  );
};

export default ContactPage;
