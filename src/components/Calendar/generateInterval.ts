import { eachDayOfInterval, format } from 'date-fns'

import theme from '../../global/styles/theme'
import { getPlataformDate } from '../../utils/getPlataformDate'
import { MarkedDateProps, DayProps } from './interface'

export const generateInterval = (start: DayProps, end: DayProps): MarkedDateProps => {
  let interval: MarkedDateProps = {}

  eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp) }).forEach(
    dateItem => {
      const date = format(getPlataformDate(dateItem), 'yyyy-MM-dd')

      interval = {
        ...interval,
        [date]: {
          color:
            start.dateString === date || end.dateString === date
              ? theme.colors.primary
              : theme.colors.primary_light,
          textColor:
            start.dateString === date || end.dateString === date
              ? theme.colors.primary_light
              : theme.colors.primary,
        },
      }
    },
  )

  return interval
}
