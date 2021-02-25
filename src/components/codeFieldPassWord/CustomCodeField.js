import { TextInput, View, TouchableOpacity } from 'react-native'
import * as React from 'react'
import { getStyle, getSymbols } from './utils'
import useFocusState from './useFocusState'
import styles from './CodeField.styles'
import { Colors } from '../../assets/Colors'

const DEFAULT_CELL_COUNT = 4
const CustomCodeField = (
  {
    rootStyle,
    textInputStyle,
    onBlur,
    onFocus,
    value,
    renderCell,
    placeHolderText,
    autoFocus,
    cellCount = DEFAULT_CELL_COUNT,
    RootProps = {},
    RootComponent = TouchableOpacity,
    noneTextStyle,
    placeholderTextColor,
    ...rest
  },
  ref,
) => {
  const [isFocused, handleOnBlur, handleOnFocus] = useFocusState({
    onBlur,
    onFocus
  })
  const [focusState, setFocusState] = React.useState(false)
  const cells = getSymbols(value || '', cellCount).map(
    (symbol, index, symbols) => {
      const isFirstEmptySymbol = symbols.indexOf('') === index
      return renderCell({
        index,
        symbol,
        isFocused: isFocused && isFirstEmptySymbol
      })
    },
  )
  return React.createElement(
    RootComponent,
    { ...RootProps, style: getStyle(styles.root, rootStyle, focusState) },
    value.length >= 1 ? cells : null,
    React.createElement(
      TextInput,
      {
        caretHidden: false,
        disableFullscreenUI: true,
        spellCheck: false,
        autoCorrect: false,
        blurOnSubmit: false,
        autoFocus,
        clearButtonMode: 'never',
        autoCapitalize: 'characters',
        underlineColorAndroid: 'transparent',
        maxLength: cellCount,
        ...rest,
        value,
        onBlur: () => {
          setFocusState({ backgroundColor: Colors.veryLightPinkThree })
          handleOnBlur()
        },
        onFocus: () => {
          setFocusState(textInputStyle ?? {
            backgroundColor: Colors.whiteTwo, color: Colors.veryLightPink, borderWidth: 0.5, borderColor: 'green'
          })
          handleOnFocus()
        },
        style: getStyle(value.length >= 1 ? (styles.textInput) : [styles.textInput1, noneTextStyle]),
        ref,
        placeholder: placeHolderText,
        placeholderTextColor: placeholderTextColor ?? Colors.veryLightPink
      },
    ),
  )
}
export default React.forwardRef(CustomCodeField)
