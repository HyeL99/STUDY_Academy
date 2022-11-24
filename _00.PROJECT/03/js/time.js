$(function(){
  $('#contentsBtn .timeTable').on('click',function(){
    $('#timeTablePage').css('top','50px');
  });
  $('#timerBtn').on('click',function(){
    $('#timeTablePage').css('top','50px');
  });
  $('#todayTimeTableArticle').on('click',function(){
    $('#timeTablePage').css('top','50px');
  });
  $('#timeTablePage .closeBtn').on('click',function(){
    $('#timeTablePage').css('top','100%');
  });

  /*================== TOPIC 입력 관련 이벤트 ================== */
  let topicTitle = '';
  $('#topicTitle').on('change',function(e){
    topicTitle = e.target.value;
  });
  $('#addTopic').on('click',function(){
    if(topicTitle !== ''){
      topicHtml = `<li>${topicTitle}<button class="deleteTopicItem">삭제</button></li>`;
      $('#popupTopicList').append(topicHtml);
      $('#editTopicPopup form')[0].reset();
      topicTitle = '';
      deleteTopicItem();
      return false;
    } else {
      alert('TOPIC을 입력해주세요.')
      return false;
    }
    
  });
  $('#editTopicPopup .popupSubmit').on('click',function(){
    $('#editTopicPopup').css('top','100vh');
  });
  $('#editTopicPopup .popupCancel').on('click',function(){
    $('#editTopicPopup').css('top','100vh');
  });
  $('#editTopicBtn').on('click',function(){
    $('#editTopicPopup').css('top','0');
  });
  deleteTopicItem();
});

const deleteTopicItem = () => {
  $('.deleteTopicItem').on('click',function(){
    $(this).parent('li').remove();
    /* json에서 목록 지워야함 */
  })
}
const deleteItem = (e) => {
  console.log(e.target);
  $this = e.target;
  $($this).parent('li').remove();
}