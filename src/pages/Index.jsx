import { Box, Flex, Heading, Text, Button, Icon, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, Image, useColorModeValue } from "@chakra-ui/react";
import { FaChartPie, FaRegMoneyBillAlt, FaUsers, FaCog } from "react-icons/fa";

const Index = () => {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box px={8} py={12}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl">
          Dashboard
        </Heading>
        <Button leftIcon={<Icon as={FaCog} />}>Settings</Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={5} mb={6}>
        <StatCard icon={FaChartPie} title="Sales" stat="5,630" />
        <StatCard icon={FaRegMoneyBillAlt} title="Revenue" stat="$17,200" />
        <StatCard icon={FaUsers} title="Customers" stat="1,924" />
        <StatCard icon={FaCog} title="Operations" stat="50+" />
      </SimpleGrid>
      <Flex direction={{ base: "column", lg: "row" }} spacing={5}>
        <Box flex="2" bg={cardBg} borderRadius="lg" p={5} mr={3}>
          <Heading as="h3" size="lg" mb={4}>
            Recent Activity
          </Heading>
          {/* TODO: Add recent activity list here */}
        </Box>
        <Box flex="1" bg={cardBg} borderRadius="lg" p={5}>
          <Heading as="h3" size="lg" mb={4}>
            Team Members
          </Heading>
          {/* TODO: Add team member list here */}
        </Box>
      </Flex>
    </Box>
  );
};

const StatCard = ({ icon, title, stat }) => {
  return (
    <Stat px={{ base: 4, md: 6 }} py={"5"} shadow={"xl"} border={"1px solid"} borderColor={useColorModeValue("gray.800", "gray.500")} rounded={"lg"}>
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
          <StatHelpText>Compared to last month</StatHelpText>
        </Box>
        <Box my={"auto"} color={useColorModeValue("gray.800", "gray.200")}>
          <Icon as={icon} w={8} h={8} />
        </Box>
      </Flex>
    </Stat>
  );
};

export default Index;
