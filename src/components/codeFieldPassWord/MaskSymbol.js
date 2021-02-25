/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, Platform
} from 'react-native'
import { useTimeout } from './useTimer'
import {RF} from '../../helpers/ResponsiveFontSize';

export const DEFAULT_BLINKING_SPEED = 1000
const MaskSymbol = ({
  isLastFilledCell,
  symbolStyle,
  children: symbol,
  delay = DEFAULT_BLINKING_SPEED
}) => {
  const [visibleFlag, setFlag] = useState(true)
  const [start, stop] = useTimeout(() => setFlag(false), delay, [])

  useEffect(() => {
    if (isLastFilledCell) {
      setFlag(false)
    }
  }, [isLastFilledCell])

  useEffect(() => {
    start()
    return stop
  }, [start, stop])

  return (
    <Text style={[styles.txtCell, symbolStyle]}>{symbol}</Text>
  )
}
const styles = StyleSheet.create({
  txtCell: {
    fontSize: RF(24),
    marginBottom: Platform.OS === 'ios' ? 0 : 5
  }
})
export default MaskSymbol
