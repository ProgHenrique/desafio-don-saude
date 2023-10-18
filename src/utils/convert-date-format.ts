import { format } from 'date-fns'

export default function convertDateFormat(date: string): string {
  return format(new Date(date), 'dd/MM/yyyy HH:mm')
}
