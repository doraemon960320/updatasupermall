//格式化日期（时间戳）
export function formatDate(date){
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  let dates = date.getDate();
  let hour = date.getHours();
  let h = hour < 10 ? '0' + hour : hour;
  let minutes = date.getMinutes();
  let m = minutes < 10 ? '0' + minutes : minutes;
  let seconds=date.getSeconds();
  let s = seconds < 10 ? '0' + seconds : seconds;
  return year +'-' + month + '-' + dates+ ' ' + h + ':' + m + ':' + s;
}

//防抖函数
//debounce是防抖函数
export function debounce(func,delay){
  let timer = null;
  return function(...args){
    if(timer){
      clearTimeout(timer);
    }
    timer=setTimeout(()=>{
      func.apply(this.args);
    },delay)
  }
}

