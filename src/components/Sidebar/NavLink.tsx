import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import { ElementType } from 'react'
import Link from 'next/link'
import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends ChakraLinkProps {
  children: string
  icon: ElementType
  href: string
}

export default function NavLink({ children, icon, href,  ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
    <ChakraLink  display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20"></Icon>
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
    </ActiveLink>
  )
}
