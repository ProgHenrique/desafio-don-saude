import { format } from 'date-fns'

export default function convertDateFormat(date: string): string {
  const dateWithoutTimeZone = new Date(date).toISOString().slice(0, -1)
  return format(new Date(dateWithoutTimeZone), 'dd/MM/yyyy')
}
