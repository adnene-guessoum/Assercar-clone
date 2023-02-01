import Section from '../components/section';
import { Paragraph, Titre } from '../components/paragraph';
import {
  Flex,
  Image,
  Container,
  Divider,
  List,
  ListItem
} from '@chakra-ui/react';

const PageConvention = () => {
  return (
    <Flex direction="column" w="75%" ml="280px">
      <Container>
        <Image
          src="/images/convention/titre_convention.gif"
          alt="bannière convention"
        />
        <Divider bg="black" mt={18} mb={18} />
      </Container>

      <Section delay={0.1}>
        <Flex gap={3} align="center">
          <Image
            src="/images/convention/convention.gif"
            alt="illustration convention"
            h="120px"
          />
          <Titre>
            La convention de services est signée par le réparateur et par
            ASSERCAR, elle engage également les assureurs cités qui
            s&apos;efforcent d&apos;orienter leurs clients/assurés vers les
            réparateurs signataires. Chaque partie retire des avantages de la
            convention :
          </Titre>
        </Flex>
      </Section>

      <Section delay={0.2}>
        <Container>
          <List>
            <ListItem>
              <Flex>
                <Image
                  src="/images/atouts/puce.gif"
                  alt="puce"
                  w="15px"
                  h="15px"
                  m={5}
                />
                <Paragraph>
                  L&apos;assuré bénéficie d&apos;une réparation de qualité et de
                  services gratuits pour lui,
                </Paragraph>
              </Flex>
            </ListItem>

            <ListItem>
              <Flex>
                <Image
                  src="/images/atouts/puce.gif"
                  alt="puce"
                  w="15px"
                  h="15px"
                  m={5}
                />
                <Paragraph>
                  L&apos;assureur satisfait et fidélise sa clientèle, il règle
                  réparations et services à prix convenu,
                </Paragraph>
              </Flex>
            </ListItem>

            <ListItem>
              <Flex>
                <Image
                  src="/images/atouts/puce.gif"
                  alt="puce"
                  w="15px"
                  h="15px"
                  m={5}
                />
                <Paragraph>
                  Le réparateur bénéficie d&apos;un apport de clientèle
                  significatif et de règlements rapides.
                </Paragraph>
              </Flex>
            </ListItem>
          </List>
        </Container>

        <Divider bg="black" mt={18} mb={18} />
      </Section>

      <Section delay={0.4}>
        <Paragraph>
          La convention ASSERCAR a été établie dans un souci de transparence et
          d&apos;équité. Ainsi, l&apos;assureur participe au coût du véhicule de
          remplacement et la remise accordée, en contrepartie de l&apos;apport
          de clientèle, ne dépend que du nombre de réparations effectivement
          réalisées. L&apos;assureur a un intérêt évident à favoriser
          l&apos;augmentation de la clientèle des réparateurs ASSERCAR.
        </Paragraph>
      </Section>
    </Flex>
  );
};

export default PageConvention;
