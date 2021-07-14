import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars'

import { CalendarProps } from './interface'
import { ptBR } from './localeConfig'

LocaleConfig.locales['pt-BR'] = ptBR
LocaleConfig.defaultLocale = 'pt-BR'

export const Calendar: React.FC<CalendarProps> = ({ markedDates, onDayPress }: CalendarProps) => {
  const theme = useTheme()
  return (
    <CustomCalendar
      renderArrow={direction => (
        <Feather
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
          size={24}
          color={theme.colors.text}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        margin: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary.regular,
        textDayHeaderFontFamily: theme.fonts.primary.medium,
        textMonthFontSize: 20,
        textMonthFontFamily: theme.fonts.secondary.semiBold,
        textDayHeaderFontSize: 10,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  )
}
