import Section from '../components/section';
import { Paragraph, Titre } from '../components/paragraph';
import { Flex, Image, Text, Container, Divider, Link } from '@chakra-ui/react';

const PageAssistance = () => {
  return (
    <Flex direction="column" w="83%" h="100vh" p={5} ml="280px">
      <Container>
        <Image
          src="/images/assistance/titre_assistance.gif"
          alt="bannière assistance"
        />
        <Divider bg="black" mt={18} mb={18} />
      </Container>

      <Section delay={0.1}>
        <Flex gap={3} justify="center" align="center">
          <Titre>
            Les sociétés d&apos;assistance interviennent notamment en cas de
            sinistre auto matériel et organisent le transport du véhicule
            accidenté. Elles peuvent donc conseiller les assurés dans le choix
            du réparateur.
          </Titre>
        </Flex>
      </Section>

      <Flex direction="column">
        <Section delay={0.2}>
          <Divider bg="black" mt={18} mb={18} />
          <Flex gap={4}>
            <Image
              src="/images/assistance/logo_europ.gif"
              alt="logo europ assistance"
              h="70px"
              w="140px"
              mt={2}
            />
            <Paragraph>
              Inventeur de l&apos;assistance médicale il y a plus de 40 ans et
              de l&apos;assistance automobile en France comme à l&apos;étranger,{' '}
              <Link href="https://www.europ-assistance.fr/" isExternal>
                EUROP Assistance
              </Link>{' '}
              n&apos;a jamais cessé d&apos;innover en anticipant les multiples
              évolutions de la société. De l&apos;exceptionnel au quotidien,
              EUROP Assistance a étendu son expertise, à un large éventail de
              prestations dans les métiers du voyage, de l&apos;automobile, de
              la santé, et de la vie quotidienne. Les clients de nombreux
              assureurs dont{' '}
              <Text as="span" fontWeight="bold">
                AXERIA
              </Text>
              , bénéficient des services de EUROP Assistance, notamment lorsque
              leur véhicule est immobilisé suite à un accident. ASSERCAR a donc
              conclu un partenariat avec EUROP Assistance qui préconise les
              réparateurs du réseau aux assurés de AXERIA. Ces derniers ont
              accès aux services des réparateurs ASSERCAR, qu&apos;ils aient
              contacté en premier EUROP Assistance ou leur assureur.
            </Paragraph>
          </Flex>
        </Section>

        <Section delay={0.4}>
          <Divider bg="black" mt={18} mb={18} />
          <Flex gap={4}>
            <Image
              src="/images/assistance/logo_mondial.gif"
              alt="logo mondial assistance"
              h="70px"
              w="140px"
              mt={2}
            />
            <Paragraph>
              Acteur majeur du marché de l&apos;assistance et des services,{' '}
              <Link href="https://www.allianz-voyage.fr/" isExternal>
                MONDIAL Assistance
              </Link>{' '}
              France met à disposition de ses partenaires entreprises des
              prestations adaptées à tous les aspects de la vie quotidienne et
              professionnelle. Les clients de nombreux assureurs dont{' '}
              <Text as="span" fontWeight="bold">
                PACIFICA
              </Text>
              ,{' '}
              <Text as="span" fontWeight="bold">
                SOGESSUR{' '}
              </Text>
              et{' '}
              <Text as="span" fontWeight="bold">
                THÉLEM
              </Text>{' '}
              Assurances peuvent bénéficier des services de MONDIAL Assistance,
              notamment lorsque leur véhicule est immobilisé suite à un
              accident. ASSERCAR a donc conclu un partenariat avec MONDIAL
              Assistance qui préconise les réparateurs du réseau aux assurés,
              PACIFICA et SOGESSUR et THÉLEM Assurances. Ces derniers ont accès
              aux services des réparateurs ASSERCAR, qu&apos;ils aient contacté
              en premier MONDIAL Assistance ou leur assureur.
            </Paragraph>
          </Flex>
        </Section>
      </Flex>
    </Flex>
  );
};

export default PageAssistance;
