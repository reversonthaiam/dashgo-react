import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import { ElementType } from 'react'

interface NavLinkProps extends ChakraLinkProps {
  children: string
  icon: ElementType
}

export default function NavLink({ children, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20"></Icon>
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
