import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"


const IndexPage = () => {
  return(
    <Container>
         <FeatureImage />
         <Content>
           <ContentCard 
            date="20 July 2022" 
            title="Excepteur sint obcaecat cupiditat"
            excerpt=" Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam," 
            slug="/test" />
         </Content>
    </Container>
  )
}

export default IndexPage