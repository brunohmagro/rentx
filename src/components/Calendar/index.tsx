import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars'

export const Calendar: React.FC = () => {
  LocaleConfig.locales['pt-BR'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    dayNames: [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Hoje',
  }

  LocaleConfig.defaultLocale = 'pt-BR'

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
    />
  )
}
