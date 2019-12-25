export default {
    formateDate(time){
        if(!time) return '';
        let date = new Date(time);
        //Less than 10 shows 01 instead of 1
        function dataStr(dataB){
            if(dataB < 10){
                dataB = '0' + dataB;
            }
            return dataB
        }
        return date.getFullYear() + 
        '-' + dataStr(date.getMonth()+1) + 
        '-' + dataStr(date.getDate()) +
        ' ' + date.getHours() +
        ':' + dataStr(date.getMinutes()) +
        ':' + dataStr(date.getSeconds()) +
        ' '
         ;
    }
}