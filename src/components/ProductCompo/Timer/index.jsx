import React from 'react';
import Countdown from 'react-countdown';

const Timer = ({timestring}) => {
  // D-day의 날짜와 시간을 설정합니다.
  const targetDate = new Date(timestring);

  // Countdown 컴포넌트의 렌더링 로직입니다.
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <p>시간 종료</p>;
    } else {
      // 시분초를 두 자리 수로 표시하기 위해 String.padStart() 메서드를 사용합니다.
      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');

      return (
        <div>
          {(days!==0)?
            <div>{days}일 {formattedHours}시간 {formattedMinutes}분</div>
          : (hours!==0)?
            <div>{formattedHours}시간 {formattedMinutes}분</div>
            : <div>{formattedMinutes}분 {formattedSeconds}초</div>
          }
          
        </div>
      );
    }
  };

  return (
    <div>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default Timer;
