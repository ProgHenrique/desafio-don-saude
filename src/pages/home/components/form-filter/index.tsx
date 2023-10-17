import { InputSearch } from 'src/styles/input'
import { Flex, Form, Label } from './styles'
import { Calendar, Search } from 'lucide-react'
import { Button } from 'src/styles/button'
import { useWindowSize } from 'src/hooks/use-window-size'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { EmpyContext } from 'src/contexts/contextEmpy'

const filterFormSchema = z.object({
  benefit: z.string().transform((benefit) => benefit.toLowerCase()),
  role: z.string().transform((role) => role.toLowerCase()),
  created_at: z.string(),
  updated_at: z.string(),
})

type FilterFormData = z.infer<typeof filterFormSchema>

interface FormFilterProps {
  ableToFilter: boolean
}

export default function FormFilter({ ableToFilter }: FormFilterProps) {
  const { filterUsers, clearFilter } = useContext(EmpyContext)
  const { register, reset, handleSubmit } = useForm<FilterFormData>({
    resolver: zodResolver(filterFormSchema),
    defaultValues: {
      benefit: '',
      created_at: '',
      role: '',
      updated_at: '',
    },
  })
  const windowSize = useWindowSize()
  const isWindowSizeMobile = windowSize < 1024

  function handleFilterUsers(data: FilterFormData) {
    filterUsers(data)
    reset()
  }
  function handleClearFilter() {
    clearFilter()
    reset()
  }
  return (
    <Form
      as={'form'}
      css={{ display: `${ableToFilter ? 'flex' : 'none'}` }}
      onSubmit={handleSubmit(handleFilterUsers)}
    >
      <div>
        <Label>
          <p>Benefício</p>
          <InputSearch>
            <span>
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Selecione"
              {...register('benefit')}
            />
          </InputSearch>
        </Label>
        <Label>
          <p>Cargo</p>
          <InputSearch>
            <span>
              <Search size={16} />
            </span>
            <input type="text" placeholder="Selecione" {...register('role')} />
          </InputSearch>
        </Label>
        <Label>
          <p>Data de cadastro</p>
          <InputSearch>
            <input
              type="date"
              max={new Date().toISOString().split('T')[0]}
              placeholder="Esta semana"
              {...register('created_at')}
            />
            {isWindowSizeMobile ? (
              <span>
                <Calendar size={16} />
              </span>
            ) : null}
          </InputSearch>
        </Label>
        <Label>
          <p>Data da última alteração</p>
          <InputSearch>
            <input
              type="date"
              max={new Date().toISOString().split('T')[0]}
              placeholder="Esta semana"
              {...register('updated_at')}
            />
            {isWindowSizeMobile ? (
              <span>
                <Calendar size={16} />
              </span>
            ) : null}
          </InputSearch>
        </Label>
      </div>

      <Flex>
        <Button
          color="gray"
          size="sm"
          css={{ color: 'rgba(18, 25, 41, 0.64)' }}
          type="button"
          onClick={handleClearFilter}
        >
          Limpar filtros
        </Button>
        <Button color="blue" size="sm" type="submit">
          Filtrar
        </Button>
      </Flex>
    </Form>
  )
}
