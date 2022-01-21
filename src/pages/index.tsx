import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm, useFormState } from 'react-hook-form'

type SignInFormDdata = {
  email: string
  password: string
}

export default function SignIn() {
  const { register, handleSubmit } = useForm()

  const handleSignIn: SubmitHandler<SignInFormDdata> = async (value) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(value)
  }

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            type="email"
            name="email"
            label="E-mail"
            {...register('email')}
          ></Input>
          <Input
            type="password"
            name="password"
            label="Password"
            {...register('password')}
          ></Input>
        </Stack>
        <Button type="submit" mt="6" size="lg" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
