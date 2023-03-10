import Section from '../components/section';
import ImageSpinner from '../components/imageSpinner';
import { Paragraph, Titre } from '../components/paragraph';
import { Flex, Image, Container, Divider, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react';

const Page = () => {
  return (
    <Container display="flex" flexWrap="wrap" ml="280px" maxW="83vw" w="100%">
      <Flex direction="column" w="73%">
        <Container>
          <Image src="/images/moto.png" alt="bannière accueil" />
          <Divider mt={18} mb={18} />
        </Container>

        <Section delay={0.1}>
          <Flex gap={3} align="start">
            <Image
              src="/images/accueil/particulier.jpg"
              alt="illustration générique"
              w="112px"
              h="75px"
            />
            <Flex direction="column">
              <Titre>
                Vous êtes Particulier utilisateur d&apos;un véhicule
              </Titre>
              <Paragraph>
                Ce site présente le réseau des réparateurs ASSERCAR, à
                disposition de votre assureur ou de votre gestionnaire de
                flottes de véhicules. Consultez la description des{' '}
                <Text as="span" color="red" decoration="underline">
                  <NextLink href="/services">services</NextLink>
                </Text>{' '}
                qui vous sont proposés gratuitement en cas d&apos;accident.
              </Paragraph>
            </Flex>
          </Flex>
          <Divider />
        </Section>

        <Section delay={0.2}>
          <Flex gap={3} align="start">
            <Image
              src="/images/accueil/courtier.jpg"
              alt="illustration courtier"
              w="112px"
              h="75px"
            />
            <Flex direction="column">
              <Titre>
                Vous êtes déjà Client ASSERCAR - Assureur, Intermédiaire
                d&apos;assurances ou Gestionnaire de flottes
              </Titre>
              <Paragraph>
                Accédez directement à votre{' '}
                <Text as="span" color="red" decoration="underline">
                  <NextLink href="/identification">Espace réservé</NextLink>
                </Text>{' '}
                et au site de géolocalisation des réparateurs. Vous pouvez aussi
                suivre l&apos;avancement de vos dossiers.
              </Paragraph>
            </Flex>
          </Flex>
          <Divider />
        </Section>

        <Section delay={0.3}>
          <Flex gap={3} align="start">
            <Image
              src="/images/accueil/courtier2.jpg"
              alt="illustration courtier alternative"
              w="112px"
              h="75px"
            />
            <Flex direction="column">
              <Titre>
                Vous êtes Assureur, Intermédiaire ou Gestionnaire de flottes
              </Titre>
              <Paragraph>
                Ce site présente l&apos;offre ASSERCAR mais vous avez
                certainement besoin d&apos;informations supplémentaires.
                N&apos;hésitez pas à nous{' '}
                <Text as="span" color="red" decoration="underline">
                  <NextLink href="/contact">contacter</NextLink>
                </Text>
                , nous répondrons à toutes vos questions et, si vous le
                souhaitez, nous étudierons votre besoin afin de vous proposer
                une réponse adaptée et personnalisée.
              </Paragraph>
            </Flex>
          </Flex>
          <Divider />
        </Section>

        <Section delay={0.4}>
          <Flex gap={3} align="start">
            <Image
              src="/images/accueil/auto.jpg"
              alt="illustration automobile"
              w="112px"
              h="75px"
            />
            <Flex direction="column">
              <Titre>Vous êtes déjà Réparateur ASSERCAR</Titre>
              <Paragraph>
                Accédez directement à votre{' '}
                <Text as="span" color="red" decoration="underline">
                  <NextLink href="/identification">Espace réservé</NextLink>
                </Text>
                , vous pouvez y obtenir des informations, consulter vos dossiers
                carrosserie, gérer complètement vos dossiers vitrage et suivre
                les règlements.
              </Paragraph>
            </Flex>
          </Flex>
          <Divider />
        </Section>

        <Section delay={0.5}>
          <Flex gap={3} align="start">
            <Image
              src="/images/accueil/auto2.jpg"
              alt="illustration automobile alternative"
              w="112px"
              h="75px"
            />
            <Flex direction="column">
              <Titre>Vous êtes Réparateur</Titre>
              <Paragraph>
                Ce site présente le réseau ASSERCAR. Si vous souhaitez en
                devenir membre, consultez la page{' '}
                <Text as="span" color="red" decoration="underline">
                  <NextLink href="/reparateurs">Les réparateurs</NextLink>
                </Text>
                .
              </Paragraph>
            </Flex>
          </Flex>
          <Divider mt={18} />
        </Section>
      </Flex>

      <Flex direction="column" justify="center" align="right" gap={5} p={10}>
        <Image
          src="/images/accueil/reseau.gif"
          alt="Situation réseau"
          border="solid red"
        />

        <TableContainer border="solid" color="black" bg="#ffffff40">
          <Table>
            <TableCaption color="red">Mise à jour du 29-01-2023</TableCaption>
            <Thead>
              <Tr bg="grey">
                <Th colSpan="3" scope="colgroup" color="black">
                  Situation du réseau Assercar
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Nb réparateurs Assercar</Td>
                <Td isNumeric bg="grey">
                  1963
                </Td>
              </Tr>
              <Tr>
                <Td>Dont réparateur Outre Mer</Td>
                <Td isNumeric bg="grey">
                  21
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Image
          src="/images/accueil/actu.gif"
          alt="actualité réseau"
          border="solid red"
        />

        <ImageSpinner />
      </Flex>
    </Container>
  );
};

export default Page;
