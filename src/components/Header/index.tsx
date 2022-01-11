import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSideBarDrawer } from '../../contexts/SidebarDrawerContext'
import Logo from './Logo'
import { NotificationNav } from './NotificationsNav'
import { Profile } from './Profile'
import SearchBox from './SearchBox'

export function Header() {
  const { onOpen } = useSideBarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
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
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open navigation"
          mr="2"
        ></IconButton>
      )}
      <Logo></Logo>
      <SearchBox></SearchBox>

      <Flex align="center" ml="auto">
        <NotificationNav></NotificationNav>
        <Profile></Profile>
      </Flex>
    </Flex>
  )
}
