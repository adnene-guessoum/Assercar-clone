import { useState } from 'react';
import {
  Flex,
  Divider,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const IdForm = () => {
  const [voirMDP, setVoirMDP] = useState(false);

  const handleShowClick = () => setVoirMDP(!voirMDP);

  return (
    <Flex flexDirection="column" width="100wh" alignItems="center">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: '90%', md: '468px' }} border="red 2px solid">
          <Heading
            size="lg"
            color="black"
            backgroundColor="#80808060"
            p={4}
            textAlign="center"
          >
            Connectez-vous à votre compte
          </Heading>
          <Divider backgroundColor="red" />
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="#E0E0E0"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    {<CFaUserAlt color="red" />}
                  </InputLeftElement>
                  <Input
                    type="text"
                    placeholder="Identifiant"
                    backgroundColor="#20202380"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300">
                    {<CFaLock color="red" />}
                  </InputLeftElement>
                  <Input
                    type={voirMDP ? 'text' : 'password'}
                    placeholder="Mot de passe"
                    backgroundColor="#20202380"
                  />
                  <InputRightElement width="4.5rem" color="gray.300">
                    <Button
                      h="2rem"
                      size="sm"
                      color="black"
                      onClick={handleShowClick}
                    >
                      {voirMDP ? 'Cacher' : 'Voir'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link color="red">Mot de passe oublié ?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="red"
                width="full"
              >
                Connexion
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default IdForm;
