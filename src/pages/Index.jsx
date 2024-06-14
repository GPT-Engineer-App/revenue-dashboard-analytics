import { Container, VStack, Heading, Box, Stat, StatLabel, StatNumber, StatHelpText, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Business Dashboard
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stat>
              <StatLabel>Sales</StatLabel>
              <StatNumber>$50,000</StatNumber>
              <StatHelpText>Jan 1 - Feb 1</StatHelpText>
            </Stat>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stat>
              <StatLabel>Revenue</StatLabel>
              <StatNumber>$120,000</StatNumber>
              <StatHelpText>Jan 1 - Feb 1</StatHelpText>
            </Stat>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stat>
              <StatLabel>Customers</StatLabel>
              <StatNumber>1,200</StatNumber>
              <StatHelpText>Jan 1 - Feb 1</StatHelpText>
            </Stat>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;