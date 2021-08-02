import React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"
import { AboutImage, AboutWrapper } from "./About.styles"

const About = () => {
  const data = useAboutQuery()
  const imageData = data.wpPage.featuredImage.node.localFile.publicURL
  return (
    <AboutWrapper>
      <AboutImage image={imageData} />
      <div className="about-text">
        <div
          dangerouslySetInnerHTML={{
            __html: data.wpPage.content,
          }}
        />
      </div>
    </AboutWrapper>
  )
}
export default About
