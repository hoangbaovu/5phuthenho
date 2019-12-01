import React from 'react';
import { Timeline, Icon } from 'antd';
import TimelineTime from './Time';
import TimelineTitle from './Title';
import TimeLineItemContent from './ItemContent';
import './test.less';

const TimeLineContent = () => {
  return (
    <Timeline mode="alternate" style={{ overflowX: "hidden", padding: "20px 0" }}>
      <Timeline.Item dot={<Icon type="clock-circle-o" />}>
        <TimelineTime>13:45</TimelineTime>
        <TimelineTitle>Đón Khách <Icon type="heart" /></TimelineTitle>
        <TimeLineItemContent img="../../../../assets/timeline/welcome.png">
          - Bạn hãy đến bàn checkin và nhận đồ BTC phát. Nếu tham gia tiết mục văn nghệ, bạn hãy xác nhận lại với BTC ngay tại quầy checkin. 
          <br />
          - Tại quầy xem bài tarot, bạn sẽ được các cô gái reader của chúng tôi giải đáp một câu hỏi bất kỳ về chủ đề tình cảm. Đây chính là món quà tinh thần nhỏ mà BTC dành tặng như lời cảm ơn và chúc may mắn dành cho bạn. 
          Với những bạn có nhu cầu xem tarot nhiều hơn, kỹ và chi tiết hơn: các cô gái reader của chúng tôi sẽ sẵn lòng xem bài cho bạn với chi phí tùy thuộc ở bạn.
        </TimeLineItemContent>
      </Timeline.Item>
      <Timeline.Item dot={<Icon type="clock-circle-o" />}>
        <TimelineTime>14:30</TimelineTime>
        <TimelineTitle>Chương Trình Chính</TimelineTitle>
        <TimeLineItemContent img="../../../../assets/timeline/talk.png"></TimeLineItemContent>
      </Timeline.Item>
      <Timeline.Item dot={<Icon type="clock-circle-o" />}>
        <TimelineTime>17:15</TimelineTime>
        <TimelineTitle>Tiệc Trà Bánh</TimelineTitle>
        <TimeLineItemContent img="../../../../assets/timeline/party2.png">
        Dùng trà, bánh kẹo hoa quả, giao lưu với các bạn chơi.
        </TimeLineItemContent>
      </Timeline.Item>
      <Timeline.Item dot={<Icon type="clock-circle-o" />}>
        <TimelineTime>17:30</TimelineTime>
        <TimelineTitle>Tổng Kết Chương Trình</TimelineTitle>
        <TimeLineItemContent img="../../../../assets/timeline/matching2.png">
          Tổng kết chương trình và tìm ra các cặp đôi may mắn.
        </TimeLineItemContent>
      </Timeline.Item>
    </Timeline>
  )
}

export default TimeLineContent;