import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Modal, GestureResponderEvent } from 'react-native'
import { colors } from '../constants/colors'

export interface ComponentProps {
  showModal: boolean
  titleMessage: string
  subtitleMessage?: string
  buttonMessage: string
  onAcceptButtonPressed: (event: GestureResponderEvent) => void
}

const AlertModalDialog = (props: ComponentProps) => {
  return (
    <Modal animationType="fade" transparent visible={props.showModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalCardContainer}>
          <Text style={styles.titleText}>{props.titleMessage} </Text>
          {props.subtitleMessage && <Text style={styles.subtitleText}> {props.subtitleMessage}</Text>}
          <View style={styles.modalCardContentButtonContainer}>
            <TouchableOpacity onPress={props.onAcceptButtonPressed} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>
                <Text>{props.buttonMessage} </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.blackOpacity,
  },
  modalCardContainer: {
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  modalCardContentButtonContainer: {
    marginTop: 30,
    marginBottom: 24,
    marginHorizontal: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  titleText: {
    marginTop: 20,
    marginHorizontal: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  subtitleText: {
    textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    fontSize: 12,
    color: colors.black,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 30,
    backgroundColor: colors.primaryColor,
  },
  buttonText: {
    fontSize: 12,
    color: colors.white,
  },
})

export default AlertModalDialog
