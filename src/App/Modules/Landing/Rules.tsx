import React from 'react';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { HeaderTitle } from '../Shared/HeaderTitle';
import './less/Rules.less';

type Props = {
  id: string
}

const LandingRules = ({ id }: Props) => {
  return (
    <ScrollOverPack id={id} className="Rules">
      <QueueAnim
        className="container"
        key="text"
        leaveReverse
        type="bottom"
      >
        <div key="h2">
          <HeaderTitle key="h2" title="Thể lệ" />
        </div>
        <p key="p" className="Rules__content">
          Đơn giản là sẽ có 20 bạn nam và 20 bạn nữ cùng tham gia, mỗi cặp sẽ có 5 phút để trò chuyện với nhau nhưng không được phép lộ thông tin cá nhân của mình.
          Hết 5 phút chuyện trò, bạn nữ ngồi im tại chỗ còn bạn nam đứng lên di chuyển sang bàn bên cạnh.
          Vậy thì quá tuyệt khi một buổi chiều được gặp gỡ tận 20 người khác giới, trò chuyện và làm quen cùng họ.
          Và còn tuyệt hơn nữa nếu cô gái hay chàng trai bạn thích cũng chọn bạn ở cuối chương trình!!!
          <br />
          Chúc mừng bạn đã có một mùa đông không lạnh!!!
        </p>
        <img key="image" className="Rules__pose" src={require("../../../assets/pose_puzzle_kumiawaseru.png")} alt=""/>
      </QueueAnim>
    </ScrollOverPack>
  )
}

export default LandingRules;