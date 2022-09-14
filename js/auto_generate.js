function auto_generate(){
    const studentID = "01"
    const studentName = "OOO"
    
    const timeTable = ["08：00~08：20","12：40~13：00","16：30 後"]
    const mode = ["viewform","formResponse"]
    var today = new Date()
    var google_form_url = "https://docs.google.com/forms/d/e/1FAIpQLSeB_I4A33cHK5Dbnvl-pRXMUruSs8UEksa4mMyzGNh2-1EEfA/"
    google_form_url = google_form_url.replace(/viewform|formResponse/,'')

    function getDateInChinese(date){
        let ROCYear = (date.getFullYear()-1911).toString()
        let dateList = date.toLocaleDateString().split("/")
        let month = dateList[1].padStart(2,'0')
        let day = dateList[2].padStart(2,'0')
        let chineseDayOfWeek = "日一二三四五六"[date.getDay()]
        return ROCYear + "/" + month + "/" + day + "(" + chineseDayOfWeek + ")"
    }
    function setTimeTable(nowHour){
        if (nowHour <= 9){
            return 0
        } else if (nowHour<=15){
            return 1
        } else {
            return 2
        }
    }
    var url = google_form_url + mode[0] + 
              "?entry.1751906262=" + studentID +
              "&entry.779228108=" + studentName +
              "&entry.2083584461=" + timeTable[setTimeTable(today.getHours())] +
              "&entry.1425418337=" + getDateInChinese(today)
    return url
}
