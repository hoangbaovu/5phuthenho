import React from 'react';
import { HeaderTitle } from '../Shared/HeaderTitle';
import './less/Rules.less';

const LandingRules = () => {
  return (
    <div className="Rules">
      <div className="container">
        <HeaderTitle title="Thể lệ" />
        <p className="Rules__content">
          Đơn giản là sẽ có 20 bạn nam và 20 bạn nữ cùng tham gia, mỗi cặp sẽ có 5 phút để trò chuyện với nhau nhưng không được phép lộ thông tin cá nhân của mình (chỉ được gọi nhau bằng số gắn trên áo).
          Hết 5 phút chuyện trò, bạn nữ ngồi im tại chỗ còn bạn nam đứng lên di chuyển sang bàn bên cạnh.
          Vậy thì quá tuyệt khi 1 buổi chiều được gặp gỡ tận 20 người khác giới, trò chuyện và làm quen cùng họ.
          Và còn tuyệt hơn nữa nếu cô gái hay chàng trai bạn thích cũng chọn bạn ở cuối chương trình!!!
          Chúc mừng bạn đã có một mùa đông không lạnh!!!
        </p>
      </div>
    </div>
  )
}

export default LandingRules;