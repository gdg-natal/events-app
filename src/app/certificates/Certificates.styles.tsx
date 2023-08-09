'use client'
import styled from 'styled-components'

import bgVector from '@/app/assets/bg-vector.svg'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('${bgVector}') no-repeat right bottom 50px;
`
