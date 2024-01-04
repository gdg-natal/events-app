/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet
} from '@react-pdf/renderer'

import { ParticipantType } from '@/app/types/certificate.types'

const EVENT_NAME = 'Google I/O Extended 2023 - Natal'
const EVENT_TYPE = 'presencial'
const EVENT_DURATION = '10h'
const EVENT_DATE = '15 de julho de 2023'
const EVENT_LOCATION = 'SEBRAE RN'

const Certificate = ({ participant }: { participant?: ParticipantType }) => {
  if (!participant) return <p>Participante inválido.</p>

  return (
    <Document pageMode="fullScreen">
      <Page style={styles.page} orientation="landscape" size="A5" wrap={false}>
        <View style={styles.content}>
          <Image style={styles.image} src="/certificate.jpg" />
          <Text style={styles.name}>{participant?.name}</Text>
          <Text style={styles.description}>{participant?.type === 'speaker' ? 'palestrou no' : 'participou do'} {EVENT_NAME}, evento {EVENT_TYPE} com {EVENT_DURATION} de duração, realizado no dia {EVENT_DATE}, no {EVENT_LOCATION}</Text>
          <Text style={styles.validatorCode}>Código validador: {participant?.id}</Text>
          <Text style={styles.validatorUrl}>Valide em {window.location.origin}/certificates/validate</Text>
        </View>
      </Page>
    </Document>
  )
}

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  name: {
    fontSize: '24px',
    position: 'absolute',
    top: '155px',
    textAlign: 'center',
    width: '100%'
  },
  description: {
    fontSize: '14px',
    position: 'absolute',
    top: '205px',
    left: '50px',
    textAlign: 'center',
    width: '500px'
  },
  image: {
    width: '600px'
  },
  validatorCode: {
    fontSize: '12px',
    position: 'absolute',
    left: '40px',
    bottom: '44px'
  },
  validatorUrl: {
    fontSize: '8px',
    position: 'absolute',
    left: '40px',
    bottom: '30px'
  }
});

export default Certificate
