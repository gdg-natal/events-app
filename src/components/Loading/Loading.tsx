import { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

import logo from '../../assets/images/logo-gdg.png'

import { Container, Loader } from "./Loading.styles";

const Loading = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setProgress(50)
    }, 200)
    setTimeout(() => {
      setProgress(98)
    }, 500)
  }, [])

  return (
    <Container>
      <LoadingBar color="#4285f4" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <img src={logo} alt="Logo" />
      <Loader />
    </Container>
  )
}

export default Loading
