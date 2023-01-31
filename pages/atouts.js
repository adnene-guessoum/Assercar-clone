import Section from '../components/section';
import { Paragraph, Titre } from '../components/paragraph';
import {
  Flex,
  Image,
  Text,
  Container,
  Divider,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const PageAtouts = () => {
  return (
    <Flex direction="column" w="75%" ml="280px">
      <Container>
        <Image src="/images/atouts/Titre_atouts.gif" alt="bannière atouts" />
        <Divider bg="black" mt={18} mb={18} />
      </Container>

      <Section delay={0.1}>
        <Flex gap={3} align="center">
          <Image
            src="/images/atouts/atouts.gif"
            alt="illustration atouts"
            h="120px"
          />
          <Titre>
            ASSERCAR dispose d&apos;atouts non négligeables, pour constituer et
            développer le réseau des réparateurs et pour assurer son
            fonctionnement quotidien :
          </Titre>
        </Flex>
        <Divider bg="black" mt={18} mb={18} />
      </Section>

      <Section delay={0.2}>
					<Container>
        <Flex gap={4} align="start">
          <Image
            src="/images/atouts/puce.gif"
            alt="puce"
            w="15px"
            h="15px"
						m={5}
          />
          <Paragraph>
            Une convention de services motivante pour toutes les parties et qui
            tend essentiellement à la satisfaction du client/assuré.
          </Paragraph>
        </Flex>
        <Divider bg="black" mt={18} mb={18} />
		</Container>
      </Section>

      <Section delay={0.4}>
		<Container>
        <Flex gap={4}>
          <Image
            src="/images/atouts/puce.gif"
            alt="puce"
            w="15px"
            h="15px"
            m={5}
          />
          <Paragraph>
            Une excellente connaissance du terrain et des réparateurs dans
            toutes les régions de France, grâce à son partenaire
            <Text as="span" ml={2} decoration="underline">
              <NextLink href="/assureur">BCA Expertise</NextLink>
            </Text>
            , importante entreprise d&apos;expertise en automobile.
          </Paragraph>
        </Flex>
        <Divider bg="black" mt={18} mb={18} />
		</Container>
      </Section>

      <Section delay={0.6}>
		<Container>
        <Flex gap={4}>
          <Image
            src="/images/atouts/puce.gif"
            alt="puce"
            w="15px"
            h="15px"
            m={5}
          />
          <Paragraph>
            La mise à disposition de ses clients d&apos;un système
            <Text as="span" m={2} decoration="underline">
              <NextLink href="/cartographie">cartographique</NextLink>
            </Text>
            de géolocalisation pour une recherche rapide des réparateurs proches
            du client/assuré.
          </Paragraph>
        </Flex>
        <Divider bg="black" mt={18} mb={18} />
		</Container>
      </Section>

      <Section delay={0.8}>
		<Container>
        <Flex gap={4}>
          <Image
            src="/images/atouts/puce.gif"
            alt="puce"
            w="15px"
            h="15px"
            m={5}
          />
          <Paragraph>
            Un suivi précis de l&apos;activité des réparateurs grâce à des
            liaisons informatiques permanentes avec nos clients et partenaires.
            Les réparateurs obtiennent une réponse immédiate à toute question
            concernant les dossiers et les règlements, en cours ou déjà
            effectués.
          </Paragraph>
        </Flex>
        <Divider bg="black" mt={18} mb={18} />
		</Container>
      </Section>

      <Section delay={1}>
		<Container>
        <Flex gap={4}>
          <Image
            src="/images/atouts/puce.gif"
            alt="puce"
            w="15px"
            h="15px"
            m={5}
          />
          <Paragraph>
            La fourniture à nos clients de statistiques hebdomadaires (dès le
            lundi suivant) avec une synthèse de l&apos;activité et les nombres
            de dossiers et taux d&apos;orientation par région, par entité et
            même par gestionnaire sinistre. Ces statistiques constituent un
            véritable outil de management et de motivation de tous les
            intervenants.
          </Paragraph>
        </Flex>
        <Divider bg="black" mt={18} mb={18} />
		</Container>
      </Section>

      <Section delay={1.2}>
		<Container>
        <Flex gap={4}>
          <Image
            src="/images/atouts/puce.gif"
            alt="puce"
            w="15px"
            h="15px"
            m={5}
          />
          <Paragraph>
            Un rapport mensuel d&apos;activité pour chaque client/assureur (au
            plus tard le 3ème jour ouvrable du mois suivant) avec la situation
            du réseau et les résultats chiffrés de l&apos;activité.
          </Paragraph>
        </Flex>
        <Divider bg="black" mt={18} mb={18} />
		</Container>
      </Section>

      <Section delay={1.4}>
		<Container>
        <Flex gap={4}>
          <Image
            src="/images/atouts/puce.gif"
            alt="puce"
            w="15px"
            h="15px"
            m={5}
          />
          <Paragraph>Un coût de fonctionnement très faible.</Paragraph>
        </Flex>
        <Divider bg="black" mt={18} mb={18} />
		</Container>
      </Section>
    </Flex>
  );
};

export default PageAtouts;
