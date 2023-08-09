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

const Certificate = ({ participant }: { participant: ParticipantType }) => (
  <Document pageMode="fullScreen">
    <Page style={styles.page} orientation="landscape" size="A5" wrap={false}>
      <View style={styles.content}>
        <Image style={styles.image} src="/certificate.jpg" />
        <Text style={styles.name}>{participant?.name}</Text>
        <Text style={styles.validatorCode}>Código validador: {participant?.id}</Text>
        <Text style={styles.validatorUrl}>Valide em {window.location.origin}/certificates/validate</Text>
      </View>
    </Page>
  </Document>
)

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
