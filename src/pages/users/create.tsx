import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useMutation } from 'react-query'
import { Input } from '../../components/Form/Input'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Header } from '../../components/Header'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Sidebar } from '../../components/Sidebar'
import { api } from '../../services/api'

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatorio'),
  email: yup.string().required('E-mail obrigatorio').email('e-mail invalido'),
  password: yup
    .string()
    .required('Senha obrigatoria')
    .min(6, 'No minimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {})
  })

  const { register, handleSubmit, formState: { isSubmitting, errors }} = useForm({
    resolver: yupResolver(createUserFormSchema),
  })

  //const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values,
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar></Sidebar>
        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700"></Divider>
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input
                name="name"
                label="Nome completo"
                error={errors.name}
                {...register('name')}
              ></Input>
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register('email')}
              ></Input>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input
                name="password"
                type="password"
                label="Password"
                error={errors.password}
                {...register('password')}
              ></Input>
              <Input
                name="password_confimation"
                type="password"
                label="Confirme a senha"
                error={errors.password_confimation}
                {...register('password_confimation')}
              ></Input>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
