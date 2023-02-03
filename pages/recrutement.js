import Section from '../components/section';
import { Titre } from '../components/paragraph';
import { Flex, Image, Text, Container, Divider } from '@chakra-ui/react';

import {
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Th,
  Tr
} from '@chakra-ui/react';

const PageRecrutement = () => {
  return (
    <Flex direction="column" p={5} w="85%" h="100vh" ml="280px">
      <Container>
        <Image
          src="/images/recrutement/logo_recrutement.png"
          alt="bannière recrutement"
        />
      </Container>
      <Divider mt={18} mb={18} />
      <Titre as="h1">ASSERCAR recrute :</Titre>
      <Section delay={0.2}>
        <Text color="black" mt={2} style={{ textIndent: 20 }}>
          ASSERCAR, assure depuis 2004 la constitution et l&apos;animation
          d&apos;un réseau qui approche aujourd&apos;hui 1 800 garages agrés sur
          l&apos;ensemble du territoire national. Avec 250 000 véhicules réparés
          dans le réseau en 2018, ASSERCAR est un acteur majeur du secteur de la
          réparation automobile. C&apos;est plus de 350 Millions d&apos;Euros de
          réparations qui ont transité dans les ateliers partenaires
          d&apos;ASSERCAR.
        </Text>
      </Section>
      <Section delay={0.4}>
        <Text color="black" mt={2} style={{ textIndent: 20 }}>
          Pour l&apos;ensemble de ses clients (assureurs, courtiers, mutuelles,
          gestionnaires de flottes,...), ASSERCAR constitue un important levier
          de performance, tant pour la maîtrise des coûts techniques que pour la
          satisfaction et la fidélisation des assurés. Confiance, flexibilité,
          réactivité, partenariat équitable et durable, sont les valeurs qui
          animent notre quotidien
        </Text>
      </Section>

      <Section delay={0.6}>
        <Text color="black" mt={2} style={{ textIndent: 20 }}>
          Inscrit dans une forte dynamique de croissance, ASSERCAR recrute
          aujourd&apos;hui pour conduire des projets innovants et structurants.
        </Text>
      </Section>

      <Divider mt={18} mb={18} />

      <Section delay={0.4}>
        <TableContainer border=" solid 1px black">
          <Table variant="simple">
            <TableCaption color="black" bg="lightgrey">
              Offres d&apos;emplois disponibles
            </TableCaption>
            <Thead>
              <Tr bg="red">
                <Th>Contrat</Th>
                <Th>Intitulé de l&apos;offre</Th>
                <Th>Métier</Th>
                <Th>Localisation</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody color="black" border="solid black 1px">
              <Tr></Tr>
              <Tr></Tr>
              <Tr></Tr>
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
      </Section>

      <Divider mt={18} mb={18} />
    </Flex>
  );
};

export default PageRecrutement;
