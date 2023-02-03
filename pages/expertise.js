import Section from '../components/section';
import InvestGridItem from '../components/grid-item';
import { Paragraph } from '../components/paragraph';
import {
  Flex,
  Image,
  Text,
  Container,
  Divider,
  SimpleGrid
} from '@chakra-ui/react';

import NextLink from 'next/link';

import {
  thumbBca,
  thumbVisiolis,
  thumbSothis,
  thumbAstree
} from '../components/images';

const PageExpertise = () => {
  return (
    <Flex direction="column" p={5} w="83%" ml="280px">
      <Container>
        <Image
          src="/images/expertise/banner_expertise.png"
          alt="bannière expertise"
        />
        <Divider mt={18} mb={18} />
      </Container>

      <Flex direction="column">
        <Paragraph>
          Les experts en automobile sont des partenaires privilégiés de
          l&apos;entreprise ASSERCAR, tant pour la constitution et les
          évolutions du réseau que pour la mise en œuvre de l&apos;expertise
          sans immobilisation -{' '}
          <Text as="span" decoration="underline" m={1}>
            <NextLink href="/services">l&apos;expertise à distance</NextLink>
          </Text>{' '}
          - et la gestion quotidienne des dossiers des réparations. Les échanges
          de données informatiques mis en place avec tous les réseaux
          d&apos;experts cités permettent de suivre précisément l&apos;activité
          des réparateurs.
        </Paragraph>
        <Divider mt={18} mb={18} />
      </Flex>

      <Section delay={0.2}>
        <SimpleGrid columns={2} gap={6}>
          <InvestGridItem
            title="Visiolis"
            thumbnail={thumbVisiolis}
            href="http://www.alliance-management.fr/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              Inventeur du concept d&apos;expertise à distance, Alliance
              Management & Visiolis est la première plate forme de gestion
              d&apos;accidents par Internet. Après plusieurs années de
              développement et d&apos;évolution du concept et des outils, elle
              propose une technique de traitement et d&apos;optimisation
              éprouvée, testée et référencée par les principaux donneurs
              d&apos;ordre. Alliance Management & Visiolis est un acteur reconnu
              dans le monde de l&apos;expertise automobile.
            </Text>
          </InvestGridItem>

          <InvestGridItem
            title="Astree"
            thumbnail={thumbAstree}
            href="http://www.plateformeastree.com/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              Ouverte à tous les réseaux de réparateurs, la plateforme Astrée
              est partenaire des assureurs et intervient dans les domaines de
              l&apos;expertise à distance et du management d&apos;accidents.
              Elle permet de mettre en place entre les acteurs de la réparation
              automobile, la centralisation, le contrôle et la traçabilité des
              documents électroniques échangés. La plateforme Astrée propose des
              services « à la carte » pour optimiser les processus de la
              réparation.
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
              Leader de l&apos;expertise automobile en France, BCA Expertise
              intervient dans tous les départements et emploie environ 600
              experts en automobile et stagiaires-experts qui rencontrent
              quotidiennement les réparateurs. C&apos;est sans aucun doute
              l&apos;entreprise qui a la meilleure connaissance terrain du monde
              de la réparation automobile en France. Dans le cadre de son
              partenariat avec BCA Expertise, ASSERCAR a bénéficié de cette
              connaissance pour constituer son réseau de réparateurs et en
              bénéficie encore pour toutes les évolutions.
            </Text>{' '}
          </InvestGridItem>

          <InvestGridItem
            title="Sothis"
            thumbnail={thumbSothis}
            href="https://sothis.fr/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              Proposant des solutions de back-office, SOTHIS intervient dans les
              secteurs de l&apos;automobile et du transport terrestre. Dans la
              relation triangulaire entre l&apos;assureur, le réparateur et le
              client, SOTHIS est le partenaire privilégié des compagnies
              d&apos;assurances. Avec ses mandants, elle met en place des
              procédures répondant à leur stratégie clientèle, au niveau local
              et national. La dynamique et la force de proposition de SOTHIS
              valorisent ainsi la relation des assureurs, courtiers et grands
              comptes, avec leurs clients. Avec un seul objectif : offrir à tous
              ces acteurs un service performant, en toute sérénité.
            </Text>{' '}
          </InvestGridItem>
        </SimpleGrid>
      </Section>

      <Divider mt={18} mb={18} />
      <Section delay={0.4}>
        <Flex gap={4}>
          <Image
            src="/images/expertise/logo_expert.gif"
            alt="logo expertise Assercar"
          />
          <Paragraph>
            Le réseau ASSERCAR est mis à disposition des clients des assureurs
            et intermédiaires quel que soit le mode d&apos;expertise retenu (et
            même en l&apos;absence d&apos;expertise). Ainsi, la gestion des
            sinistres et le suivi des dossiers peuvent être mis en œuvre avec
            les experts libéraux habituellement désignés dans chaque secteur
            géographique, par l&apos;assureur ou l&apos;intermédiaire concerné.
          </Paragraph>
        </Flex>
      </Section>
      <Divider mt={18} mb={18} />
    </Flex>
  );
};

export default PageExpertise;
