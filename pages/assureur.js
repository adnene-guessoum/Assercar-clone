import Section from '../components/section';
import InvestGridItem from '../components/grid-item';
import {
  Flex,
  Image,
  Text,
  Link,
  Container,
  Divider,
  SimpleGrid
} from '@chakra-ui/react';

import {
  thumbAbeille,
  thumbEquite,
  thumbEurofil,
  thumbGenerali,
  thumbPacifica,
  thumbSogessur,
  thumbThelem,
  thumbAxeria,
  thumbMedical,
  thumbSuravenir
} from '../components/images';

const PageAssureurs = () => {
  return (
    <Flex direction="column" p={5} w="83%" ml="280px">
      <Container>
        <Image
          src="/images/assureurs/titre_assureurs.png"
          alt="bannière assureurs"
        />
        <Divider mt={18} mb={18} />
      </Container>

      <Divider mt={18} mb={18} />
      <Section delay={0.2}>
        <SimpleGrid columns={3} gap={6}>
          <InvestGridItem
            title="Abeille Assurance"
            thumbnail={thumbAbeille}
            href="https://www.abeille-assurances.fr/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              6ème assureur Mondial et 2ème assureur vie et épargne long terme
              en Europe. Avec plus de 180 ans d&apos;expérience en France,
              Abeille Assurances se positionne comme un multi-spécialiste de
              l&apos;assurance et figure parmi les premiers acteurs du marché
              français avec plus de 3 millions de clients. Abeille Assurances
              s&apos;appuie sur un réseau de 900 agents d&apos;assurance et de
              1800 collaborateurs d&apos;agences répartis dans toute la France.
              L&apos;implantation géographique des agents Abeille Assurances
              permet de créer une relation régulière et de proximité avec les
              clients. Les agents généraux Abeille Assurances se distinguent
              particulièrement par leur démarche de bon conseil qui vise à
              accompagner les clients sur le long terme en leur proposant des
              offres personnalisées. Le partenariat Abeille Assurances-Assercar
              a débuté en septembre 2011.{' '}
            </Text>
          </InvestGridItem>

          <InvestGridItem
            title="Axeria"
            thumbnail={thumbAxeria}
            href="https://axeria.fr/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              société d&apos;assurances IARD (Incendie Accident, Risques Divers)
              de{' '}
              <Link href="https://www.april.fr/" color="blue" isExternal>
                APRIL Group
              </Link>
              . Elle est implantée à LYON et était précédemment connue sous le
              nom de RHODIA Assurances. Assureur de taille moyenne, AXERIA
              développe son activité dans le domaine automobile. Même si
              beaucoup de ses assurés résident dans les départements proches de
              LYON (01, 07, 26, 42, 38 et 69), AXERIA est également présente
              dans tous les autres départements. Le partenariat AXERIA-Assercar
              a été conclu en avril 2005, les gestionnaires sinistres de la
              plate-forme de LYON et les courtiers proposent les services et
              conseillent les réparateurs Assercar.
            </Text>
          </InvestGridItem>

          <InvestGridItem
            title="Eurofil"
            thumbnail={thumbEurofil}
            href="https://www.eurofil.com/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              spécialiste de l&apos;assurance directe en France avec 160000
              clients, est une société du groupe Abeille Assurances. EUROFIL
              propose par téléphone et internet des produits d&apos;assurances
              Automobile, Habitation et Protection Familiale Accident destinés
              aux particuliers. Transparence du service, prix compétitifs,
              totale disponibilité et savoir-faire de ses conseillers sont
              autant de valeurs EUROFIL. Le partenariat EUROFIL-Assercar a
              débuté en septembre 2011.
            </Text>{' '}
          </InvestGridItem>
        </SimpleGrid>
      </Section>
      <Divider mt={18} mb={18} />
      <Section delay={0.4}>
        <SimpleGrid columns={3} gap={6}>
          <InvestGridItem
            title="Generali Iard"
            thumbnail={thumbGenerali}
            href="https://www.generali.fr/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              Troisième assureur européen, multispécialiste, international,
              puissant et solide, GENERALI s&apos;est forgé une réputation de
              sérieux alliée à une créativité qui lui a souvent donné une
              longueur d&apos;avance. En France, GENERALI détient 8% du marché
              et est le deuxième assureur généraliste. L&apos;entreprise opère
              dans toutes les branches de l&apos;assurance et s&apos;appuie sur
              près de 7000 collaborateurs ainsi que sur des réseaux de
              distribution diversifiés - 1700 conseillers salariés, 1000 agents
              généraux, plus de 1500 courtiers indépendants, 120 grands
              partenaires bancaires et internet - qui figurent parmi les plus
              puissants sur le territoire national. GENERALI a plus de 6
              millions d&apos;assurés, particuliers ou bénéficiaires de
              garanties dans le cadre de leur activité professionnelle. En
              effet, 500000 professionnels indépendants et 300000 entreprises de
              moins de 20 salariés sont assurés par GENERALI. Le partenariat
              GENERALI-Assercar a débuté en septembre 2011.
            </Text>{' '}
          </InvestGridItem>

          <InvestGridItem
            title="l'Equite assurances"
            thumbnail={thumbEquite}
            href="https://www.equite.com/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              Filiale d&apos;assurance de dommages de GENERALI France dédiée aux
              grands comptes, L&apos;ÉQUITÉ accompagne ses partenaires dans la
              mise en place de programmes d&apos;assurances sur mesure pour les
              particuliers. Le partenariat L&apos;ÉQUITÉ-Assercar a débuté en
              septembre 2011.
            </Text>{' '}
          </InvestGridItem>

          <InvestGridItem
            title="la médicale"
            thumbnail={thumbMedical}
            href="https://www.lamedicale.fr/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              société d&apos;assurances du groupe CRÉDIT AGRICOLE spécialisée
              dans l&apos;assurance des professionnels de la santé, uniquement
              des professionnels de la santé. Ainsi, plus d&apos;un praticien
              libéral de santé sur 3 - et mème 1 sur 2 dans certaines activités
              comme la pharmacie ou la médecine générale - est client de LA
              MÉDICALE. Du fait de ce positionnement, LA MÉDICALE a développé
              toute une gamme de produits adaptés à l&apos;activité des
              professionnels de la santé, à leurs revenus, à leur protection et
              à leur avenir. Elle accompagne ses clients à toutes les étapes de
              leur vie professionnelle comme de leur vie privée... comme seul un
              acteur majeur de l&apos;assurance peut le faire. Le partenariat LA
              MÉDICALE - Assercar a été conclu en juillet 2010.
            </Text>{' '}
          </InvestGridItem>
        </SimpleGrid>
      </Section>
      <Divider mt={18} mb={18} />
      <Section delay={0.6}>
        <SimpleGrid columns={3} gap={6}>
          <InvestGridItem
            title="Pacifica"
            thumbnail={thumbPacifica}
            href="https://www.ca-assurances.com/CAA/Nos-entites-juridiques/Pacifica"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              est la société d&apos;assurances dommages du CRÉDIT AGRICOLE, en
              constant développement depuis sa création en 1990. Après un test
              concluant limité à 3 départements pendant l&apos;année 2003,
              PACIFICA a décidé, début 2004, de participer à la création de la
              société Assercar afin de disposer d&apos;un réseau de réparateurs
              complet pour répondre aux besoins de sa clientèle en attente de
              services personnalisés. Une grande part des assurés PACIFICA qui
              subissent un sinistre fait appel aux réparateurs du réseau
              Assercar. Le nombre de sinistres (et donc de réparations) continue
              d&apos;augmenter car PACIFICA poursuit son développement à un
              rythme important.
            </Text>{' '}
          </InvestGridItem>

          <InvestGridItem
            title="Sogessur"
            thumbnail={thumbSogessur}
            href="https://www.assurances.societegenerale.com/fr/particulier/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              est la société d&apos;assurances du groupe{' '}
              <Link href="https://particuliers.sg.fr/" color="blue" isExternal>
                SOCIÉTÉ GÉNÉRALE.
              </Link>{' '}
              Les contrats d&apos;assurance sont distribués par les agences
              bancaires, implantées plus particulièrement dans les moyennes et
              grandes agglomérations. Bancassureur récemment arrivé sur le
              marché, SOGESSUR développe fortement sa clientèle. En avril 2006,
              SOGESSUR a décidé de devenir partenaire du réseau Assercar après
              avoir étudié l&apos;offre des réseaux concurrents. Les
              gestionnaires sinistres proposent les services des réparateurs
              Assercar à leurs clients. L&apos;activité des réparateurs Assercar
              pour les clients de SOGESSUR est rapidement devenue significative,
              notamment dans les zones urbaines.
            </Text>{' '}
          </InvestGridItem>

          <InvestGridItem
            title="Suravenir Assurances"
            thumbnail={thumbSuravenir}
            href="https://www.suravenir-assurances.fr/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              filiale assurance dommages de{' '}
              <Link
                href="https://www.cm-arkea.com/banque/assurance/credit/accueil"
                color="blue"
                isExternal
              >
                CRÉDIT MUTUEL ARKÉA
              </Link>{' '}
              qui regroupe les agences de la banque CRÉDIT MUTUEL en Bretagne,
              dans le Centre de la France et dans le Sud-ouest. Les contrats
              d&apos;assurance sont distribués par les agences bancaires des
              régions citées mais aussi par des courtiers dans toutes les autres
              régions. De ce fait, la clientèle de SURAVENIR Assurances est en
              forte progression. Le bancassureur a décidé de retenir
              l&apos;offre Assercar et de recommander les garages du réseau à
              ses clients dès juillet 2010, y compris en cas de sinistres bris
              de glaces.
            </Text>{' '}
          </InvestGridItem>
        </SimpleGrid>
      </Section>
      <Divider mt={18} mb={18} />
      <Section delay={0.8}>
        <SimpleGrid columns={3} gap={6}>
          <InvestGridItem
            title="Thelem"
            thumbnail={thumbThelem}
            href="https://www.thelem-assurances.fr/"
          >
            <Text
              p={2}
              sx={{
                'text-align': 'justify'
              }}
            >
              dont le siège social est proche d&apos;ORLÉANS, est un assureur
              bien implanté dans les départements du Centre et de l&apos;Ouest
              de la France. L&apos;entreprise est née des fusions successives
              des mutuelles : L&apos;ORLÉANAISE, MRA, La NANTAISE et
              L&apos;ANGEVINE RÉUNIES, La NORMANDIE, Les ASSURANCES MUTUELLES DE
              SEINE ET MARNE et Les ASSURANCES MUTUELLES DE L&apos;INDRE. Les
              30000 sinistres autos annuels, auxquels s&apos;ajoutent également
              30000 sinistres bris de glaces, sont gérés par un réseau
              d&apos;intermédiaires constitué de 245 agents généraux (certains
              sont issus de l&apos;ex-mutuelle CGA de NANTES) et, partiellement,
              par des courtiers avec lesquels THÉLEM Assurances a développé un
              véritable partenariat. Depuis janvier 2008, THÉLEM Assurances est
              partenaire du réseau Assercar. Les agences et les courtiers
              disposent donc des services proposés par les réparateurs Assercar
              pour leurs clients, y compris en cas de sinistres bris de glaces.
            </Text>{' '}
          </InvestGridItem>
        </SimpleGrid>
      </Section>
      <Divider mt={18} mb={18} />
    </Flex>
  );
};

export default PageAssureurs;
