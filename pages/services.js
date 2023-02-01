import Section from '../components/section';
import { Paragraph, Titre } from '../components/paragraph';
import {
  Flex,
  Image,
  Text,
  Container,
  Divider,
  List,
  ListItem
} from '@chakra-ui/react';

const PageServices = () => {
  return (
    <Flex direction="column" w="75%" ml="280px">
      <Container>
        <Image
          src="/images/services/titre_services.gif"
          alt="bannière services"
        />
        <Divider bg="black" mt={18} mb={18} />
      </Container>

      <Section delay={0.1}>
        <Flex gap={3} justify="center" align="center">
          <Image
            src="/images/services/service.gif"
            alt="illustration services"
            h="120px"
          />
          <Titre>
            Les services prévus par la convention ASSERCAR sont réalisés à
            chaque fois, il s&apos;agit principalement :
          </Titre>
        </Flex>
      </Section>

      <Section delay={0.2}>
        <Container>
          <List>
            <ListItem>
              <Flex gap={3}>
                <Image
                  src="/images/services/veh_ead.gif"
                  alt="puce"
                  w="30px"
                  h="30px"
                  mt={3}
                />
                <Paragraph>
                  <Text as="span" fontWeight="bold">
                    De l&apos;expertise à distance
                  </Text>
                  , afin d&apos;éviter l&apos;immobilisation du véhicule
                  endommagé. La quasi-totalité des expertises effectuées dans le
                  cadre de la convention ASSERCAR, commence à distance. Pour les
                  dommages importants ou complexes, un déplacement de
                  l&apos;expert est évidemment nécessaire mais il est effectué{' '}
                  <Text as="span" fontWeight="bold">
                    pendant
                  </Text>{' '}
                  les réparations. Ainsi, le client/assuré ne subit pas
                  l&apos;immobilisation de son véhicule pour l&apos;expertise.
                </Paragraph>
              </Flex>
            </ListItem>

            <ListItem>
              <Flex gap={3}>
                <Image
                  src="/images/services/veh_pret.gif"
                  alt="puce"
                  w="30px"
                  h="30px"
                  mt={3}
                />
                <Paragraph>
                  <Text as="span" fontWeight="bold">
                    De la mise à disposition d&apos;un véhicule de remplacement
                  </Text>
                  , c&apos;est le service essentiel de la convention. Le
                  véhicule de remplacement est systématiquement proposé par le
                  réparateur pour toute la durée de la réparation. Il
                  s&apos;agit d&apos;un véhicule récent à faible kilométrage. Le
                  prêt est pris en charge par l&apos;assureur concerné, il est
                  donc totalement gratuit pour le client/assuré, à
                  l&apos;exception du carburant.
                </Paragraph>
              </Flex>
            </ListItem>

            <ListItem>
              <Flex gap={3}>
                <Image
                  src="/images/services/veh_pret.gif"
                  alt="puce"
                  w="30px"
                  h="30px"
                  mt={3}
                />
                <Paragraph>
                  <Text as="span" fontWeight="bold">
                    De la garantie des réparations à vie
                  </Text>
                  , c&apos;est un service exclusif du réseau. Les réparations
                  effectuées dans le cadre d&apos;un sinistre pris en charge par
                  un assureur client ASSERCAR sont garanties sans limite de
                  temps. Les réparateurs délivrent ainsi un message fort quant à
                  la qualité de leur travail.
                </Paragraph>
              </Flex>
            </ListItem>

            <ListItem>
              <Flex gap={3}>
                <Image
                  src="/images/services/veh_controle.gif"
                  alt="puce"
                  w="30px"
                  h="30px"
                  mt={3}
                />
                <Paragraph>
                  <Text as="span" fontWeight="bold">
                    Des contrôles du véhicule réparé
                  </Text>
                  le réparateur vérifie sans démontage les principaux éléments
                  mécaniques, système d&apos;éclairage, niveau des liquides,
                  état et pression des pneus, etc. Si une intervention est
                  nécessaire, le client/assuré est informé, il prend à sa charge
                  les éventuels travaux.
                </Paragraph>
              </Flex>
            </ListItem>

            <ListItem>
              <Flex gap={3}>
                <Image
                  src="/images/services/veh_lavage.gif"
                  alt="puce"
                  w="30px"
                  h="30px"
                  mt={3}
                />
                <Paragraph>
                  <Text as="span" fontWeight="bold">
                    Du nettoyage du véhicule réparé
                  </Text>
                  , le réparateur effectue un lavage complet de l&apos;extérieur
                  du véhicule et un dépoussiérage de l&apos;intérieur.
                </Paragraph>
              </Flex>
            </ListItem>
          </List>
        </Container>

        <Divider bg="black" mt={18} mb={18} />
      </Section>
    </Flex>
  );
};

export default PageServices;
