import { Label } from 'src/styles/label'
import { Flex, Form, FormAnnotation, FormContainer, Section } from './styles'
import { InputSearch } from 'src/styles/input'
import { Eye, EyeOff } from 'lucide-react'
import { ChangeEvent, useContext, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { firstLetterUppercase } from 'src/utils/first-letter-uppercase'
import { Button } from 'src/styles/button'
import { EmpyContext } from 'src/contexts/contextEmpy'
import { useNavigate } from 'react-router-dom'

const createUserFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'o nome deve ter no mínimo três letras.' })
      .regex(/^([a-z\\áàâãéèêíïóôõöúçñ ]+)$/i, {
        message: 'o usuário deve conter apenas letras.',
      })
      .transform((name) => firstLetterUppercase(name)),
    email: z
      .string()
      .min(1, { message: 'você deve adicionar um email.' })
      .email({ message: 'digite o email corretamente.' })
      .transform((email) => email.toLowerCase()),
    role: z.string().min(1, { message: 'você deve adicionar um cargo.' }),
    phone: z.string().min(11, { message: 'digite o número completo com DDD.' }),
    password: z
      .string()
      .min(8, { message: 'a senha deve conter pelo menos 8 dígitos.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'as senhas não coincidem.',
    path: ['confirmPassword'],
  })

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function CreateNewUser() {
  const { createNewUser } = useContext(EmpyContext)
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
  const navigate = useNavigate()

  const {
    handleSubmit,
    watch,
    reset,
    register,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const passwordMatch = watch('confirmPassword') === watch('password')

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }
  function handleShowPasswordConfirm() {
    setShowPasswordConfirm(!showPasswordConfirm)
  }

  function handleFormatNumberPhone(event: ChangeEvent<HTMLInputElement>) {
    let inputValue: string = event.target.value.replace(/\D/g, '')

    if (inputValue.length > 11) {
      inputValue = inputValue.substring(0, 11)
    }

    const ddd = inputValue.length > 0 ? `(${inputValue.substring(0, 2)}` : ''
    let phone: string = ''

    if (inputValue.length > 7) {
      const number = inputValue.substring(2)
      const part1 = number.substring(0, 5)
      const part2 = number.substring(5)
      phone = ') ' + part1 + '-' + part2
    } else if (inputValue.length > 2) {
      phone = `) ${inputValue.substring(2, inputValue.length)}`
    } else {
      phone = ''
    }

    const numberFormatted = ddd + phone

    setValue('phone', numberFormatted)
  }

  function handleCreateNewUser(data: CreateUserFormData) {
    createNewUser(data)
    reset()
  }

  function handleCancelCreateUser() {
    reset()
    navigate('/')
  }
  return (
    <Section>
      <Form as="form" onSubmit={handleSubmit(handleCreateNewUser)}>
        <FormContainer>
          <strong>Dados do usuário</strong>
          <Label>
            <p>Nome completo</p>
            <InputSearch>
              <input type="text" placeholder="Digite" {...register('name')} />
            </InputSearch>
            <p>
              {errors.name ? (
                <FormAnnotation>* {errors.name.message}</FormAnnotation>
              ) : (
                ''
              )}
            </p>
          </Label>
          <Label>
            <p>Email</p>
            <InputSearch>
              <input type="email" placeholder="Digite" {...register('email')} />
            </InputSearch>
            <p>
              {errors.email ? (
                <FormAnnotation>* {errors.email.message}</FormAnnotation>
              ) : (
                ''
              )}
            </p>
          </Label>
          <Flex>
            <Label>
              <p>Cargo</p>
              <InputSearch>
                <input type="text" placeholder="Digite" {...register('role')} />
              </InputSearch>
              <p>
                {errors.role ? (
                  <FormAnnotation>* {errors.role.message}</FormAnnotation>
                ) : (
                  ''
                )}
              </p>
            </Label>
            <Label>
              <p>Telefone</p>
              <InputSearch>
                <input
                  type="tel"
                  placeholder="Digite o celular com DDD"
                  {...register('phone')}
                  onChange={handleFormatNumberPhone}
                />
              </InputSearch>
              <p>
                {errors.phone ? (
                  <FormAnnotation>* {errors.phone.message}</FormAnnotation>
                ) : (
                  ''
                )}
              </p>
            </Label>
          </Flex>
          <Flex>
            <Label>
              <p>Senha</p>
              <InputSearch>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite"
                  {...register('password')}
                />
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={handleShowPassword}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </span>
              </InputSearch>
              <p>
                {errors.password ? (
                  <FormAnnotation>* {errors.password.message}</FormAnnotation>
                ) : (
                  ''
                )}
              </p>
            </Label>
            <Label>
              <p>Confirme a senha</p>
              <InputSearch>
                <input
                  type={showPasswordConfirm ? 'text' : 'password'}
                  placeholder="Digite"
                  {...register('confirmPassword')}
                />
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={handleShowPasswordConfirm}
                >
                  {showPasswordConfirm ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </span>
              </InputSearch>
              <p>
                {errors.confirmPassword
                  ? !passwordMatch && (
                      <FormAnnotation>
                        * {errors.confirmPassword.message}
                      </FormAnnotation>
                    )
                  : ''}
              </p>
            </Label>
          </Flex>
        </FormContainer>
        <Flex
          css={{
            fontSize: '1.125rem',
            fontWeight: 'bold',
            gap: '1rem',
            '@desktop': {
              flexDirection: 'row-reverse',
            },
          }}
        >
          <Button
            color="blue"
            disabled={isSubmitting}
            css={{ padding: '0.75rem 1.125rem' }}
          >
            Criar usuário
          </Button>
          <Button
            type="button"
            color="gray"
            onClick={handleCancelCreateUser}
            css={{ padding: '0.75rem 1.125rem' }}
          >
            Cancelar
          </Button>
        </Flex>
      </Form>
    </Section>
  )
}
