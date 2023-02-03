import Section from '../components/section';
import IdForm from '../components/identificationForm';
import { Paragraph, Titre } from '../components/paragraph';
import { Flex, Image, Text, Container, Divider } from '@chakra-ui/react';
import NoSsr from '../components/disableSSR';

const PageIdentification = () => {
  return (
    <Flex direction="column" w="75%" ml="280px">
      <Container>
        <Image
          src="/images/identification/banner_identification.png"
          alt="bannière identification"
        />
        <Divider bg="black" mt={18} mb={18} />
      </Container>

      <Section delay={0.1}>
        <Flex gap={3} justify="center" align="center">
          <Titre>
            <Text as="h1">Accueil espace réservé</Text>
          </Titre>
        </Flex>
      </Section>

      <Flex direction="column">
        <Divider bg="black" mt={18} mb={18} />
        <Section delay={0.2}>
          <Paragraph>
            Vous êtes Client ASSERCAR (assureur, gestionnaire de flottes) ou
            intermédiaire d&apos;un client ASSERCAR (agent d&apos;assurances,
            courtier) ou Réparateur ASSERCAR, indiquez ci-dessous votre
            identifiant et votre mot de passe pour accéder à l&apos;espace
            réservé. Si vous n&apos;avez pas encore vos codes d&apos;accès,
            veuillez contacter votre RSR si vous êtes un réparateur. Si vous
            êtes intermediaire d&apos;un client, contactez le responsable reseau
            dans votre entreprise.
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <NoSsr>
            <IdForm />
          </NoSsr>
        </Section>
      </Flex>
    </Flex>
  );
};

export default PageIdentification;
