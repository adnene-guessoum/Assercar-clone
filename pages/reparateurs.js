import Section from '../components/section';
import { Paragraph, Titre } from '../components/paragraph';
import { Flex, Image, Text, Container, Divider, Link } from '@chakra-ui/react';

const PageReparateurs = () => {
  return (
    <Flex direction="column" w="75%" ml="280px">
      <Container>
        <Image
          src="/images/reparateurs/titre_reparateurs.gif"
          alt="bannière reparateurs"
        />
        <Divider bg="black" mt={18} mb={18} />
      </Container>

      <Section delay={0.1}>
        <Flex gap={3} justify="center" align="center">
          <Image
            src="/images/reparateurs/reparateurs.gif"
            alt="illustration reparateurs"
            h="120px"
          />
          <Titre>
            <Text as="h1">Les réparateurs:</Text>
          </Titre>
        </Flex>
      </Section>

      <Flex direction="column">
        <Section delay={0.2}>
          <Paragraph>
            Le réseau ASSERCAR s&apos;est développé rapidement depuis la
            création de la société. Les réparateurs sont présents dans tous les
            départements de la métropole et dans certains départements outre
            mer. Nous veillons tout particulièrement à adapter leur nombre à
            l&apos;activité prévisionnelle afin que chacun bénéficie réellement
            d&apos;un apport de clientèle. L&apos;arrivée de nouveaux clients
            nous amènera sans doute à augmenter encore le nombre de réparateurs.
          </Paragraph>
          <Divider bg="black" mt={18} mb={18} />
        </Section>

        <Section delay={0.4}>
          <Paragraph>
            Les réparateurs ASSERCAR sont avant tout des professionnels de la
            carrosserie aptes à réaliser des réparations de qualité. Leurs
            entreprises de toutes tailles sont indépendantes ou membres
            d&apos;un réseau de carrossiers ou membres des réseaux des
            constructeurs automobiles - garage agréé (agent), concessionnaire ou
            succursale. Ils réparent des véhicules de toutes marques et leurs
            tarifs sont compétitifs. Bien sûr, la satisfaction de la clientèle
            est une de leurs préoccupations essentielles !
          </Paragraph>
          <Divider bg="black" mt={18} mb={18} />
        </Section>

        <Section delay={0.4}>
          <Paragraph>
            Si vous êtes réparateur et souhaitez intégrer le réseau ASSERCAR,
            vous pouvez transmettre une candidature en remplissant ce{' '}
            <Link
              href="https://www.assercar.fr/personnel_assercar/saisie_audit.php?Type_entite=3"
              isExternal
            >
              dossier de candidature.
            </Link>
          </Paragraph>
          <Divider bg="black" mt={18} mb={18} />
        </Section>
      </Flex>
    </Flex>
  );
};

export default PageReparateurs;
