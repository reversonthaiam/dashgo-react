import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  isCurrent?: boolean
  number: number
  onPageChange: (page: number) => void
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: 'pink.500', cursor: 'default' }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{ bg: 'pink.500', cursor: 'default' }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}
