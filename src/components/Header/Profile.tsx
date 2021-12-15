import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
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
  )
}
