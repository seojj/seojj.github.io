var init = function(){
  //현재 시각 화면에 표시 (시계)
  var sec = document.getElementById('sec');
  var min = document.getElementById('min');
  var hour = document.getElementById('hour');
  var month = document.getElementById('month');
  var date = document.getElementById('date');

  var time;
  function intervalHandler(){
  time = new Date();
  sec.innerHTML = addZero(time.getSeconds());
  min.innerHTML = addZero(time.getMinutes());
  hour.innerHTML = addZero(time.getHours());
  month.innerHTML = time.getMonth()+1+'월';
  date.innerHTML = time.getDate()+'일';
  }
  setInterval(intervalHandler,1000);

  // 알람 시계 영역
  // 현재 시각
  var time2;
  var hour2 = document.getElementById('hour2');
  var min2 = document.getElementById('min2');


  function intervalHandler2(){
    time2 = new Date();
    hour2.innerHTML = addZero(time2.getHours());
    min2.innerHTML = addZero(time2.getMinutes());
    AlarmStart();

  }
  setInterval(intervalHandler2,1000);


  // 알람
  var alarmSet_h = document.getElementById('alarm_Set_h');
  var alarmSet_m = document.getElementById('alarm_Set_m');
  var alarmStart = document.getElementById('alarm_Start');
  var alarmClear = document.getElementById('alarm_Clear');
  var Input_h = 0;
  var Input_m = 0;
  var sound = new Audio('sound.mp3');
  // 알람 실행 여부
  var isAlarmed = false;

     // 알람 Turn on 버튼 클릭 시 실행되는 함수

    function AlarmStart(){
      if( isAlarmed === false && Input_h == parseInt(hour2.innerHTML,10)&& Input_m == parseInt(min2.innerHTML,10) && !isAlarmed){
      sound.play();
      isAlarmed === true;
      }
    }
    // 알람 Turn off 버튼 클릭 시 실행되는 함수
    function AlarmClear(){
      if( isAlarmed === true ){
      alarm_Set_h.innerHTML = 'Hour SET';
      alarm_Set_m.innerHTML = 'Min SET';
      sound.pause();

      }
    }

    function AlarmSet_h(){
      Input_h = parseInt(prompt('시간을 입력해주세요'), 10);
       // 메서드가 NaN일 때,
      if(isNaN(Input_h)){
        confirm('숫자만 입력해주세요');
      }else if(Input_h >= 24){
        confirm('23이하로 입력해주세요');
      }else if(Input_h < 0){
        confirm('0이상으로 입력해주세요');
      }else {
        alarm_Set_h.innerHTML = Input_h;
      }

    }
    function AlarmSet_m(){
      Input_m = parseInt(prompt('분을 입력해주세요'),10);

      if(isNaN(Input_m)){
        confirm('숫자만 입력해주세요');
      }else if(Input_m >= 60){
        confirm('59이하로 입력해주세요.');
      }else if (Input_m <0) {
        confirm('0이상으로 입력해주세요');
      }else {
        alarm_Set_m.innerHTML = Input_m;
        sound.pause();
      }
    }




  // 초시계 영역
  var hour3 = document.getElementById('hour3');
  var min3 = document.getElementById('min3');
  var sec3 = document.getElementById('sec3');
  var lap3 = document.getElementById('lap3')
  var lap = document.getElementById('lap');
  var startButton = document.getElementById('start3');
  var lapButton = document.getElementById('lap');
  var stopButton = document.getElementById('stop3');
  var resetButton = document.getElementById('reset');
  //lap에 대한담을 변수 생성
  var lapTimes = [];

  var hourNumber= 0;
  var minNumber= 0;
  var secNumber = 0;
  var sectimer;
  //초시계 동작 상태를 담고 있는 변수. 동작 중 true, 정지 false.
  var isRunning = false;


  // 자릿 수를 맞추기 위한 함수 작성
  function addZero (i) {
    if (i < 10) {
        return '0' + i;
    }else {
        return i;
    }
  }

  //start 버튼 클릭 시 setInterval를 실행할 함수
  function startInterval(){
    secNumber++;
    if(secNumber > 59){
      secNumber = 0;
      minNumber++;
      if(minNumber > 59){
        minNumber = 0;
        hourNumber++;
        hour3.innerHTML =  addZero(hourNumber);
      }
      min3.innerHTML = addZero(minNumber);
    }
    sec3.innerHTML = addZero(secNumber);
  }

  //start버튼 click시 실행되는 함수
  function startAction(){
    //start버튼이 실행됐을 때, 동작이 쌓이지 않는다.
    if(isRunning === false){
      secInterval = setInterval(startInterval,10);
      isRunning = true;
    }
  }

  //stop버튼 click시 실행되는 함수
  function stopAction(){
    clearInterval(secInterval);
    isRunning = false;
  }

  //reset버튼 click시 실행되는 함수
  function resetAction(){
    //한번 멈추고 초기화 실행될 수 있게 stopAction를 실행.
    stopAction();
    //화면뿐만 아니라 변수도 변경해야 reset이 됨.
    secNumber =  0;
    sec3.innerHTML = addZero(secNumber);
    minNumber = 0;
    min3.innerHTML = addZero(minNumber);
    hourNumber = 0;
    hour3.innerHTML = addZero(hourNumber);
    //랩 타임 초기화
    lapTimes =[];
    lap3.innerHTML = '<li>Laptime</li>';

  }
  //lapButton click시 실행되는 함수
  function lapButtonClick(){

    if(isRunning === true){
      //{hour:0, min:0,sec:10};
      var time = { hour: hourNumber, min : minNumber, sec : secNumber };
      //push : 배열에 원소를 넣겠다
      lapTimes.push(time);
      //lap.innerHTML = lap.innerHTML + '<p>' + time.hour + ':' + time.min + ':' + time.sec + '</p>';
      var li = document.createElement('li');
      li.innerHTML = addZero(time.hour) + ':' + addZero(time.min )+ ':' + addZero(time.sec);
      lap3.appendChild(li);

    }

}

// 세계시간 영역
  var time4 =  new Date();
  var hour4 = document.getElementById('hour4');
  var min4 = document.getElementById('min4');
  var sec4 = document.getElementById('sec4');
  var hour5 = document.getElementById('hour5');
  var min5 = document.getElementById('min5');
  var sec5 = document.getElementById('sec5');
  var hour6 = document.getElementById('hour6');
  var min6 = document.getElementById('min6');
  var sec6 = document.getElementById('sec6');


  // 우리 지역 현재시간으로부터 13시간 이전의 시간 정보를 담고있다. (뉴욕)
  var nytime = new Date(time4.getTime() - (13 * 60 * 60 * 1000))

  function intervalHandler4(){
    hour4.innerHTML = addZero(nytime.getHours());
    min4.innerHTML = addZero(nytime.getMinutes());
    sec4.innerHTML = addZero(nytime.getSeconds());
  }
  setInterval(intervalHandler4,1000);

  // 8시간 이전의 시간 정보를 담고 있다.(런던)
    var ldtime = new Date(time4.getTime() - (8 * 60 * 60 * 1000))

  function intervalHandler5(){
    hour5.innerHTML = addZero(ldtime.getHours());
    min5.innerHTML = addZero(ldtime.getMinutes());
    sec5.innerHTML = addZero(ldtime.getSeconds());
  }
  setInterval(intervalHandler5,1000);

  // 7시간 이전의 시간 정보를 담고 있다. (파리)
    var pstime = new Date(time4.getTime() - (7 * 60 * 60 * 1000))
    function intervalHandler6(){
    hour6.innerHTML = addZero(pstime.getHours());
    min6.innerHTML = addZero(pstime.getMinutes());
    sec6.innerHTML = addZero(pstime.getSeconds());

  }
  setInterval(intervalHandler6,1000);




  start3.addEventListener('click', startAction);
  stop3.addEventListener('click',stopAction);
  lap.addEventListener('click',lapButtonClick);
  reset.addEventListener('click',resetAction);
  alarmSet_h.addEventListener('click',AlarmSet_h);
  alarmSet_m.addEventListener('click',AlarmSet_m);
  //alarmStart.addEventListener('click',AlarmStart);
  alarmClear.addEventListener('click',AlarmClear);

};


document.addEventListener('DOMContentLoaded',init);
