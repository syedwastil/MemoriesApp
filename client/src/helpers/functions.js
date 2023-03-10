export const imgPath=(path,type)=>{
 // path=''
  const basePath = "http://127.0.0.1:3001/";
  if(!path){
    return type=='profile'?`${basePath}assets/user/default.webp`:''
  }
  return path.includes("http") ? path : basePath + path;
}
export const postType=(path)=>{
  if(path.includes('.mp4')||path.includes('.WebM')||path.includes('.OGG')){
    return 'video'
  }else{
    return 'img'
  }
}

export const timeSince=(date)=> {

    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }