import Section from '../components/section';
import InvestGridItem from '../components/grid-item';
import {
  Flex,
  Image,
  Text,
  Container,
  Divider,
  SimpleGrid
} from '@chakra-ui/react';

import { thumbMarsh, thumbVerlingue, thumbBca } from '../components/images';

const PageCourtier = () => {
  return (
    <Flex direction="column" w="83%" h="100vh" p={5} ml="280px">
      <Container>
        <Image
          src="/images/courtier/titre_courtier.png"
          alt="bannière courtier"
        />
        <Divider mt={18} mb={18} />
      </Container>

      <Divider mt={18} mb={18} />
      <Section delay={0.2}>
        <SimpleGrid columns={3} gap={6}>
          <InvestGridItem
            title="Marsh"
            thumbnail={thumbMarsh}
            href="https://www.marsh.com/fr/fr/home.html"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              l&apos;un des plus importants courtiers d&apos;assurances mondial.
              En France, les clients de MARSH sont des entreprises, souvent de
              taille significative, qui disposent d&apos;une flotte de
              véhicules. MARSH gère les sinistres pour le compte de ses clients
              avec une grande autonomie, l&apos;assureur n&apos;intervient que
              pour les dommages très importants. Depuis avril 2006, MARSH est
              partenaire d&apos;Assercar et propose à ses clients un véritable
              service de management d&apos;accident incluant la préconisation
              des réparateurs du réseau.
            </Text>
          </InvestGridItem>

          <InvestGridItem
            title="Verlingue"
            thumbnail={thumbVerlingue}
            href="https://www.verlingue.fr/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              Important courtier en assurances spécialisé dans la protection des
              entreprises qui apporte à ses clients des solutions simples et
              performantes pour protéger leurs activités (risques de
              l&apos;entreprise) et leur personnel (protection sociale
              complémentaire). Avec plusieurs centaines de collaborateurs
              implantés en régions et des partenaires dans plus de 100 pays,
              VERLINGUE conseille, négocie et gère les programmes
              d&apos;assurances de plus de 1000 entreprises en s&apos;appuyant
              sur 4 engagements : rendre simple, rendre clair, rendre fluide et
              rendre proche. VERLINGUE est partenaire d&apos;Assercar depuis fin
              2010 et préconise à ses clients les services des réparateurs du
              réseau.
            </Text>
          </InvestGridItem>

          <InvestGridItem
            title="BCA Expertise"
            thumbnail={thumbBca}
            href="https://www.bca.fr/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              Notre partenaire pour la constitution du réseau, BCA Expertise,
              est aussi notre client puisque les véhicules de service des 600
              experts et autres personnels de l&apos;entreprise sont confiés aux
              réparateurs Assercar lorsqu&apos;ils sont endommagés lors
              d&apos;un sinistre.
            </Text>{' '}
          </InvestGridItem>
        </SimpleGrid>
      </Section>

      <Divider mt={18} mb={18} />
    </Flex>
  );
};

export default PageCourtier;
