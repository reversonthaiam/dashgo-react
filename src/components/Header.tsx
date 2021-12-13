import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1488}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        DashGo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="grau.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        ></Input>
        <Icon as={RiSearchLine} fontSize="20"></Icon>
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="4"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine}></Icon>
          <Icon as={RiUserAddLine}></Icon>
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Reverson Thaiam</Text>
            <Text coor="gray.300" fontSize="small">
              Reversonthayan@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Reverson thaiam"
            src="https://github.com/reversonthaiam.png"
          ></Avatar>
        </Flex>
      </Flex>
    </Flex>
  )
}
