import React from 'react';
import styled from 'styled-components';

type Props = {
  id: string,
  data: any,
}

const VideoWrapper = styled.div`
  position: relative;
  @media(max-width: 1200px) {
    display: none;
  }
`;

const VideoContent = styled.div`
  content: '';
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
`;

const VideoParagraph = styled.p`
  font-size: 2em;
`;

const VideoBackground = styled.video`
  position: static;
  width: 100%;
  height: 600px;
  left: 0;
  top: 0;
  filter: blur(2px);
  object-fit: fill;
`;

const SponsorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SponsorLink = styled.a`

`;

const SponsorLogo = styled.img`
  border-radius: 25px;
  width: 200px;
  transition: all .3s ease-in-out;
  margin: 0 25px;

  ${SponsorLink}:hover & {
    opacity: .8;
  }
`;

const LandingVideo = ({ id, data }: Props) => {

  const renderSponsor = data.data.map((item: any, index: number) => {
    return (
      <SponsorLink href={item.path} key={index}>
        <SponsorLogo src={item.source} alt={item.name} />
      </SponsorLink>
    )
  });

  return (
    <VideoWrapper id={id}>
      <VideoContent>
        <div className="container">
          <VideoParagraph>
            {/* Trong tình yêu chẳng có ranh giới nào hoàn toàn cho việc đúng hay sai. Vì thế hãy cứ yêu hết lòng, hãy cứ làm những điều mình thích. Khi điều ấy không làm tổn thương đến người khác. Cũng đừng vì bất cứ ai mà làm tổn thương chính mình. Khi ai đó rời bỏ bạn hãy cứ tin rằng duyên phận của 2 người đã hết. Đừng vì bất cứ ai mà làm tổn thương chính mình, khi ai đó rời bỏ bạn hãy cứ tin rằng duyên phận giữa hai người đã hết. Đừng đặt nặng quá nhiều ở việc lỗi do ai, đừng nghĩ làm gì những việc đúng sai trong tình yêu. */}
          </VideoParagraph>
          <SponsorContainer>
            {renderSponsor}
          </SponsorContainer>
        </div>
      </VideoContent>
      <VideoBackground autoPlay muted loop>
        <source src={data.source} type="video/mp4" />
      </VideoBackground>
    </VideoWrapper>
  )
}

export default LandingVideo;