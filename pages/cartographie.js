import Section from '../components/section';
import { Paragraph, Titre } from '../components/paragraph';
import { Flex, Image, Text, Container, Divider, Link } from '@chakra-ui/react';

const PageCartographie = () => {
  return (
    <Flex direction="column" w="83%" h="100vh" p={5} ml="280px">
      <Container>
        <Image
          src="/images/cartographie/titre_cartographie.gif"
          alt="bannière cartographie"
        />
        <Divider mt={18} mb={18} />
      </Container>

      <Section delay={0.1}>
        <Flex gap={3} justify="center" align="center">
          <Titre>
            <Text as="h1">Cartographie :</Text>
          </Titre>
        </Flex>
      </Section>

      <Flex direction="column">
        <Section delay={0.2}>
          <Paragraph>
            Afin de favoriser l&apos;orientation des assurés vers les
            réparateurs du réseau, ASSERCAR met à disposition de ses clients,
            assureurs, intermédiaires d&apos;assurances et gestionnaires de
            flottes, un site Internet de géolocalisation basé sur le système
            cartographique d&apos;
            <Link href="https://www.evermaps.com/" isExternal>
              Evermaps
            </Link>
            .
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Paragraph>
            Ce système fonctionne tous les jours et à toute heure, il peut être
            utilisé même si le gestionnaire du sinistre ne connaît pas la région
            (plates-formes délocalisées). Il n&apos;y a pas de contrainte du
            fait des limites administratives des communes, des codes postaux ou
            des départements puisque la recherche dépend essentiellement de la
            distance (si un client/assuré est situé à la frontière de plusieurs
            départements, les réparateurs proposés seront les plus proches,
            qu&apos;ils soient sur un département ou sur un autre).
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Paragraph>
            La base de données du site Internet est actualisée en temps réel.
            Ainsi, un réparateur peut constater l&apos;arrivée de nouveaux
            clients peu de temps après la signature de la convention ASSERCAR.
          </Paragraph>
          <Divider mt={18} mb={18} />
        </Section>

        <Section delay={0.6}>
          <Flex gap={4}>
            <Image
              src="/images/cartographie/Evermaps_logo_ASSERCAR.png"
              alt="logo evermaps"
              h="70px"
              w="140px"
              mt={2}
            />
            <Paragraph>
              Depuis 1992, Evermaps, développe des produits cartographiques pour
              les entreprises. La solution Evermaps permet d&apos;intégrer la
              géolocalisation des réparateurs dans le système informatique de
              gestion des sinistres de l&apos;assureur ou gestionnaire de
              flottes client ASSERCAR. La recherche des réparateurs et
              l&apos;affichage des cartes sont effectués automatiquement en
              fonction de l&apos;adresse de l&apos;assuré. Le réparateur retenu
              est ensuite intégré « d&apos;un clic » dans le dossier sinistre.
            </Paragraph>
          </Flex>
        </Section>
      </Flex>
    </Flex>
  );
};

export default PageCartographie;
