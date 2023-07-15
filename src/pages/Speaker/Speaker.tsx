import { Link, useLocation } from "react-router-dom";
import { lighten } from "polished";
import {
  MdKeyboardArrowLeft,
  MdLocationPin,
  MdAccessTimeFilled,
} from "react-icons/md";

import TalkTypeTag from "components/TalkTypeTag";
import { getLocationColor } from "utils";
import {
  Container,
  BackToHomeLink,
  SpeakerSection,
  SpeakerPicture,
  SpeakerAbout,
  TalkSection,
  TalkInfo,
  Paragraph,
} from "./styles";

import SpeakersImages from '../../assets/images/speakers'

export default function SpeakerPage() {
  const { state: { title, desc, bio, speaker, picture, theme, location, time } } = useLocation()
  const locationColor = lighten(0.2, getLocationColor(location))

  return (
    <Container>
      <Link to="/">
        <BackToHomeLink>
          <MdKeyboardArrowLeft fontSize="1.5rem" /> Voltar para a programação
        </BackToHomeLink>
      </Link>
      <SpeakerSection>
        <SpeakerPicture src={(SpeakersImages as any)[picture]} alt={`${speaker} photo`} />
        <SpeakerAbout>
          <h1>{speaker}</h1>
          <Paragraph>{bio}</Paragraph>
        </SpeakerAbout>
      </SpeakerSection>
      <TalkSection>
        <h2>Palestra</h2>
        <h3>{title}</h3>
        <Paragraph as="p">{desc}</Paragraph>
        <TalkInfo>
          <div>
            <MdLocationPin color={locationColor} /> {location}
          </div>
          <div>
            <MdAccessTimeFilled /> {time}
          </div>
          <TalkTypeTag type={theme} as="div">
            {theme}
          </TalkTypeTag>
        </TalkInfo>
      </TalkSection>
    </Container>
  );
}
