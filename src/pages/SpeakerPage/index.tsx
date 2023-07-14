import { Link } from "react-router-dom";
import { lighten } from "polished";
import {
  MdKeyboardArrowLeft,
  MdLocationPin,
  MdAccessTimeFilled,
} from "react-icons/md";
import TalkTypeTag from "components/TalkTypeTag";
import { getLocationColor, getTalkTypeColor } from "utils";
import { SpeakerType } from "../../types";
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

type Props = SpeakerType;

export default function SpeakerPage({ name, bio, pictureUrl, talk }: Props) {
  const locationColor = lighten(0.2, getLocationColor(talk.stage));
  const typeColor = getTalkTypeColor(talk.type);
  return (
    <Container>
      <Link to="/">
        <BackToHomeLink>
          <MdKeyboardArrowLeft size="15px" /> Voltar para a programação
        </BackToHomeLink>
      </Link>
      <SpeakerSection>
        <SpeakerPicture src={pictureUrl} alt={`Picture of ${name}`} />
        <SpeakerAbout>
          <h1>{name}</h1>
          <Paragraph>{bio}</Paragraph>
        </SpeakerAbout>
      </SpeakerSection>
      <TalkSection>
        <h2>Palestra</h2>
        <h3>{talk.title}</h3>
        <Paragraph as="p">{talk.description}</Paragraph>
        <TalkInfo>
          <div>
            <MdLocationPin color={locationColor} /> {talk.stage}
          </div>
          <div>
            <MdAccessTimeFilled /> {talk.time}
          </div>
          <TalkTypeTag type={talk.type} as="div">
            {talk.type}
          </TalkTypeTag>
        </TalkInfo>
      </TalkSection>
    </Container>
  );
}
