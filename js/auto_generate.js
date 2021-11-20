function auto_generate(){
    const studentID = "01"
    const studentName = "沈德威"
    
    const timeTable = ["08：00~08：20","12：40~13：00","16：30 後"]
    const mode = ["viewform","formResponse"]
    var today = new Date()
    var google_form_url = "https://docs.google.com/forms/d/e/1FAIpQLScBycEoezVkQwBhjDZGmyCVDa3IPzyM1dKDK6kIA8VyEP1x2A/"

    function getDateInChinese(date){
        let ROCYear = (date.getFullYear()-1911).toString()
        let monthDay = date.toLocaleDateString().substring(4)
        let chineseDayOfWeek = "日一二三四五六"[date.getDay()]
        return ROCYear + monthDay + "(" + chineseDayOfWeek + ")"
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
              "?entry.487272113=" + studentID +
              "&entry.1865989495=" + studentName +
              "&entry.95883397=" + timeTable[setTimeTable(today.getHours())] +
              "&entry.1572216967=" + getDateInChinese(today)
    return url
}