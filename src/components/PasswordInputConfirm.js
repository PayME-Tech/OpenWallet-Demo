/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
import React, {
  useState, useEffect, useImperativeHandle, forwardRef
} from 'react'
import {
  Text, View, StyleSheet
} from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  isLastFilledCell
} from 'react-native-confirmation-code-field'
import { Colors } from '../assets/Colors'
import { RF } from '../helpers/ResponsiveFontSize'
import MaskSymbol from './codeFieldPassWord/MaskSymbol'

const CELL_COUNT = 6

const PasswordInputConfirm = ({
  onSubmit
}, ref) => {
  const [value, setValue] = useState('')
  const inputRef = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  useImperativeHandle(ref, () => inputRef.current)
  useEffect(() => {
    if (value.length === 6) {
      console.log('Value OTP -- ', value)
      if (onSubmit) onSubmit(value)
      setValue('')
    }
  }, [value])

  const renderCell = ({ index, symbol, isFocused }) => {
    let textChild = (<View key={index} />)
    if (symbol) {
      textChild = (
        <MaskSymbol
          isLastFilledCell={isLastFilledCell({ index, value })}
        >
          {symbol}
        </MaskSymbol>
      )
    } else if (isFocused) {
      textChild = <Text style={styles.cursorContainer}><Cursor /></Text>
    }
    return (
      <View key={index} style={symbol || isFocused ? index === 0 ? styles.cellWithContentFirst : styles.cellWithContent : index == 0 ? styles.cellWithoutContentFirst : styles.cellWithoutContent}>
        {textChild}
      </View>
    )
  }
  const onChange = (text) => {
    const reg = new RegExp('^[0-9]+$')
    if ((reg.test(text) || text.length === 0) && text.length <= 6) {
      setValue(text)
    }
  }
  return (
    <CodeField
      ref={inputRef}
      value={value}
      editable
      onChangeText={onChange}
      cellCount={CELL_COUNT}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={renderCell}
      rootStyle={[styles.textInput]}
    />
  )
}

const styles = StyleSheet.create({
  cellWithoutContent: {
    width: 45,
    height: 48,
    lineHeight: 48,
    borderRadius: 15,
    borderColor: '#000030',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(242,242,242)',
    marginLeft: 10
  },
  cellWithoutContentFirst: {
    width: 45,
    height: 48,
    lineHeight: 48,
    borderRadius: 15,
    borderColor: '#000030',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.veryLightPinkFour
  },
  cellWithContent: {
    width: 45,
    height: 48,
    lineHeight: 48,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    marginLeft: 10,
    borderWidth: 0.5,
    borderColor: Colors.emeraldGreenFour
  },
  cellWithContentFirst: {
    width: 45,
    height: 48,
    lineHeight: 48,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(255,255,255)',
    borderWidth: 0.5,
    borderColor: Colors.emeraldGreenFour
  },
  cursorContainer: {
    fontSize: RF(24),
    paddingBottom: 5
  },
  indicator: {
    position: 'absolute',
    right: 15
  },
  textInput: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderRadius: 15,
    height: 45,
    textAlign: 'center'
  }
})

export default forwardRef(PasswordInputConfirm)
