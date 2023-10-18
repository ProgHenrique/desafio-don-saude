import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { AlertDialogContent, Flex, FormAnnotation, Overlay } from './styles'
import { InputSearch } from 'src/styles/input'
import { Label } from 'src/styles/label'
import { Button } from 'src/styles/button'
import { z } from 'zod'
import { firstLetterUppercase } from 'src/utils/first-letter-uppercase'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { EmpyContext } from 'src/contexts/contextEmpy'

const editUserFormSchema = z.object({
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
})

type EditUserFormData = z.infer<typeof editUserFormSchema>

interface EditUserScreenPopUpProps {
  index: number
}

export default function EditUserScreenPopUp({
  index,
}: EditUserScreenPopUpProps) {
  const { tableColumns, editUser } = useContext(EmpyContext)
  const {
    handleSubmit,
    register,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<EditUserFormData>({
    resolver: zodResolver(editUserFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      role: '',
    },
  })

  useEffect(() => {
    if (tableColumns[index]) {
      setValue('name', tableColumns[index].name)
      setValue('email', tableColumns[index].email)
      setValue('role', tableColumns[index].role)
      handleFormatNumberPhone(tableColumns[index].phone)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleFormatNumberPhone(value: string) {
    let inputValue: string = value.replace(/\D/g, '')

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

  function handleEditUser({ email, name, phone, role }: EditUserFormData) {
    const formatPhone = phone.replace(/\D/g, '')
    const column = {
      name: tableColumns[index].name,
      email: tableColumns[index].email,
      role: tableColumns[index].role,
      phone: tableColumns[index].phone,
    }
    // without changes object not is updated
    if (
      JSON.stringify({ name, email, role, phone: formatPhone }) ===
      JSON.stringify(column)
    ) {
      document.getElementById('close')?.click()
      return
    }
    editUser(index, { email, name, phone, role })

    document.getElementById('close')?.click()
  }
  return (
    <AlertDialog.Portal>
      <Overlay />
      <form onSubmit={handleSubmit(handleEditUser)}>
        <AlertDialogContent>
          <strong>Editar</strong>
          <Label>
            <p>Nome completo</p>
            <InputSearch>
              <input type="text" {...register('name')} />
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
              <input type="email" {...register('email')} />
            </InputSearch>
            <p>
              {errors.email ? (
                <FormAnnotation>* {errors.email.message}</FormAnnotation>
              ) : (
                ''
              )}
            </p>
          </Label>
          <Label>
            <p>Cargo</p>
            <InputSearch>
              <input type="text" {...register('role')} />
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
                onChange={(e) => handleFormatNumberPhone(e.target.value)}
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
          <Flex>
            <AlertDialog.Cancel asChild>
              <Button type="button" color="gray" id="close">
                Cancelar
              </Button>
            </AlertDialog.Cancel>
            <Button disabled={isSubmitting} type="submit" color="blue">
              Salvar
            </Button>
          </Flex>
        </AlertDialogContent>
      </form>
    </AlertDialog.Portal>
  )
}
