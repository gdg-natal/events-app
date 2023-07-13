import { Link, useParams } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import useSpeaker from "hooks/useSpeaker";
import {
  Container,
  BackToHomeLink,
  SpeakerSection,
  SpeakerPicture,
  SpeakerAbout,
} from "./styles";

export default function SpeakerPage() {
  const { slug } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { speaker } = useSpeaker(slug!);

  // Just for now.
  if (!speaker) {
    return <h1>404 speaker not found</h1>;
  }

  return (
    <Container>
      <Link to="/">
        <BackToHomeLink>
          <MdKeyboardArrowLeft size="15px" /> Voltar para a programação
        </BackToHomeLink>
      </Link>
      <SpeakerSection>
        <SpeakerPicture />
        <SpeakerAbout>
          <h1>{speaker.name}</h1>
          <p>{speaker.bio}</p>
        </SpeakerAbout>
      </SpeakerSection>
    </Container>
  );
}
