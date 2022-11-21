/**
 * 음력 10월 3일의 2013년 양력일자를 알고 싶은 경우 lun2sol("2013", "10", "03", 1) 으로 호출
 * 응답으로는 '2013/11/05' 와 같이 스트링을 리턴.
 * yoon (윤달구분) : 1 - 평달, 2 - 윤달
 */
function lun2sol(yyyy, mm, dd, yoon) {
  /* 이미 조회했던 일자이면 ScriptProperties 에서 읽어 온다. -- 네트웍을 통한 조회는 한번만 하도록 */  
  var prop = ScriptProperties.getProperty("lun2sol/" + yyyy + "/" + mm + "/" + dd + "/" + yoon);
  if (prop != null) {
    Logger.log("Read from db: " + prop);
    return prop;
  }
  
  var param = "lunYear=" + yyyy + "&lunMonth=" + mm + "&lunDay=" + dd + 
    "&ServiceKey=N1P2JdrE3unIs9S8i9yWkZ5y5qeX+1Hq/Oqua3c0vo2M6K844BLZjN/2r9RKnHXigaPrj1qV9Mv8MHCTrmOQMw==" +
    "&_type=json";
  var url = "http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getSolCalInfo?" + param;
  var result = UrlFetchApp.fetch(url);
  Logger.log(result.getContentText());
  var data = JSON.parse(result.getContentText());
  
  var itemCount = data.response.body.totalCount;

  if (itemCount == 1) {
    var item = data.response.body.items.item;

    var new_prop = item.solYear + "-" + item.solMonth + "-" + item.solDay
    ScriptProperties.setProperty("lun2sol/" + yyyy + "/" + mm + "/" + dd + "/" + yoon, new_prop);
    
    return new_prop;
  }
  else if (itemCount > 1) {
    for each (var item in data.response.body.items.item) {
      if ((item.lunLeapmonth == "평") && (yoon == 1)) {
        var new_prop = item.solYear + "-" + item.solMonth + "-" + item.solDay
        ScriptProperties.setProperty("lun2sol/" + yyyy + "/" + mm + "/" + dd + "/" + yoon, new_prop); 
        return new_prop;
      }
      else if ((item.lunLeapmonth == "윤") && (yoon == 2)) {
        var new_prop = item.solYear + "-" + item.solMonth + "-" + item.solDay
        ScriptProperties.setProperty("lun2sol/" + yyyy + "/" + mm + "/" + dd + "/" + yoon, new_prop); 
        return new_prop;
      }
    }
  }
  
  return "ERROR";
}

/**
 * 양력 2013년 1월 26일의 음력일자를 알고 싶은 경우 sol2lun("2013", "01", "26") 으로 호출
 * 응답으로는 '2012/12/15 평' 과 같이 스트링을 리턴.
 */
function sol2lun(yyyy, mm, dd) {
  /* 이미 조회했던 일자이면 ScriptProperties 에서 읽어 온다. -- 네트웍을 통한 조회는 한번만 하도록 */  
  var prop = ScriptProperties.getProperty("sol2lun/" + yyyy + "/" + mm + "/" + dd);
  if (prop != null) {
    Logger.log("Read from db: " + prop);
    return prop;
  }
  
  var param = "solYear=" + yyyy + "&solMonth=" + mm + "&solDay=" + dd + 
    "&ServiceKey=__openapi_service_key__" +
    "&_type=json";
  var url = "http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo?" + param;
  var result = UrlFetchApp.fetch(url);
  var data = JSON.parse(result.getContentText());
  
  var itemCount = data.response.body.totalCount;
  
  if (itemCount == 1) {
    var item = data.response.body.items.item;

    yoonstr = item.lunLeapmonth;
    var new_prop = item.lunYear + "-" + item.lunMonth + "-" + item.lunDay + " " + yoonstr;
    ScriptProperties.setProperty("sol2lun/" + yyyy + "/" + mm + "/" + dd, new_prop);

    return new_prop;
  }
  return "ERROR";
}

function test_lun2sol() {
  Logger.log(lun2sol("2017", "05", "06", 1));
}

function test_sol2lun() {
  Logger.log(sol2lun("1971", "11", "20"));
}