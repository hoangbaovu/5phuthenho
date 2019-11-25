import React from 'react';
import { HeaderTitle } from '../Shared/HeaderTitle';
import './less/Introduction.less';

const LandingIntroduction = () => {
  return (
    <div className="introduction">
      <div className="container">
        <HeaderTitle title="Giới thiệu" />
        <p className="introduction__content">
          Giữa cuộc sống hiện đại, chúng ta dường như đã quá vội vã, ồn ào mà bỏ quên những điều lặng lẽ, những chân tình ngày nào.
          Sống vội, yêu vội, hay đâu đó có người còn chưa bắt kịp với nhịp yêu đương thời hiện đại.
          Vậy xin mời các bạn hãy bỏ điện thoại xuống, chúng ta hãy cùng nhau ngồi đây chuyện trò, kể cho nhau nghe những điều chân thật nhất của con người mình.
          Đâu đó những tâm hồn sẽ chậm rãi tìm thấy nhau, những ánh mắt sẽ tình cờ chạm thấy nhau.
          <br />
          Chúng tôi gọi đó là duyên! Bạn đã sẵn sàng cho một tháng 12 ngọt ngào?
        </p>
      </div>
    </div>
  )
}

export default LandingIntroduction;