import Section from '../components/section';
import InvestGridItem from '../components/grid-item';
import { Paragraph, Titre } from '../components/paragraph';
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
  thumbAbeille,
  thumbEquite,
  thumbEurofil,
  thumbGenerali,
  thumbPacifica,
  thumbSogessur,
  thumbThelem
} from '../components/images';

const PageSociete = () => {
  return (
    <Flex direction="column" p={5} ml="280px">
      <Container>
        <Image src="/images/societe/titre_societe.gif" alt="bannière société" />
        <Divider mt={18} mb={18} />
      </Container>

      <Section delay={0.1}>
        <Flex gap={3} justify="center" align="center">
          <Image
            src="/images/societe/societe_logo.gif"
            alt="illustration société"
            w="112px"
            h="75px"
          />
          <Flex direction="column">
            <Titre>Assercar, c&apos;est quoi ?</Titre>
            <Paragraph>
              La société Assercar, constituée en mars 2004 sous forme de SARL,
              est devenue une SAS (Société par Actions Simplifiée) au capital de
              37 000 €, en août 2008.
            </Paragraph>
          </Flex>
        </Flex>
      </Section>

      <Section delay={0.3}>
        <Flex direction="column" justify="center" align="center">
          <Titre>Les Missions d&apos;Assercar :</Titre>

          <Container mt={5}>
            <Paragraph>
              La société Assercar a pour objet essentiel de créer, maintenir et
              animer un réseau de réparateurs dans le domaine automobile. La
              liste des réparateurs membres est mise à disposition des clients
              de la société :{' '}
              <NextLink href="/assureur">
                <Text as="span" decoration="underline">
                  assureurs
                </Text>
              </NextLink>
              ,{' '}
              <NextLink href="/assureur">
                <Text as="span" decoration="underline">
                  gestionnaires de flottes
                </Text>
              </NextLink>{' '}
              et intermédiaires d&apos;assurances
            </Paragraph>

            <Paragraph>
              Suite au conseil de leur assureur, les assurés peuvent choisir un
              réparateur Assercar pour obtenir avec certitude qualité de travail
              et services complémentaires à la réparation de leur véhicule. Ces
              services sont gratuits pour l&apos;assuré. L&apos;assureur
              satisfait ainsi le besoin de son assuré et les réparateurs
              bénéficient d&apos;un apport de clientèle sans investissement
              commercial.
            </Paragraph>
          </Container>
        </Flex>

        <Divider />
      </Section>

      <Section delay={0.5}>
        <Titre>Sociétés au capital d&apos;Assercar :</Titre>

        <SimpleGrid columns={3} gap={6}>
          <InvestGridItem
            title="Abeille Assurance"
            thumbnail={thumbAbeille}
            href="https://www.abeille-assurances.fr/"
          >
            le groupe d&apos;assurances est entré au capital d&apos;Assercar en
            2011 avec les sociétés Abeille Assurance et Eurofil.{' '}
          </InvestGridItem>

          <InvestGridItem
            title="Eurofil"
            thumbnail={thumbEurofil}
            href="https://www.eurofil.com/"
          >
            le groupe d&apos;assurances est entré au capital d&apos;Assercar en
            2011 avec les sociétés Abeille Assurance et Eurofil.{' '}
          </InvestGridItem>

          <InvestGridItem
            title="Generali Iard"
            thumbnail={thumbGenerali}
            href="https://www.generali.fr/"
          >
            le groupe d&apos;assurances est entré au capital d&apos;Assercar en
            2011 avec les sociétés GENERALI IARD et L&apos;ÉQUITÉ.
          </InvestGridItem>

          <InvestGridItem
            title="l'Equite assurances"
            thumbnail={thumbEquite}
            href="https://www.equite.com/"
          >
            le groupe d&apos;assurances est entré au capital d&apos;Assercar en
            2011 avec les sociétés GENERALI IARD et L&apos;ÉQUITÉ.
          </InvestGridItem>

          <InvestGridItem
            title="Pacifica"
            thumbnail={thumbPacifica}
            href="https://www.ca-assurances.com/CAA/Nos-entites-juridiques/Pacifica"
          >
            la société d&apos;assurances dommages du groupe CRÉDIT AGRICOLE, est
            à l&apos;origine de la création de la société Assercar et en est
            l&apos;actionnaire principal depuis 2004.
          </InvestGridItem>

          <InvestGridItem
            title="Sogessur"
            thumbnail={thumbSogessur}
            href="https://particuliers.sg.fr/"
          >
            la société d&apos;assurances dommages du groupe SOCIÉTÉ GÉNÉRALE est
            devenue actionnaire en 2008.
          </InvestGridItem>

          <InvestGridItem
            title="Thelem"
            thumbnail={thumbThelem}
            href="https://www.thelem-assurances.fr/"
          >
            la mutuelle d&apos;assurances, principalement implantée dans le
            centre de la France, est devenue actionnaire en 2008.
          </InvestGridItem>
        </SimpleGrid>

        <Divider mt={4} />
      </Section>
    </Flex>
  );
};

export default PageSociete;
