let datas = [];
// const form = document.querySelector('form');
// let tech=[];
// form.addEventListener('submit',(e)=>{
//   e.preventDefault();
  
//   document.querySelectorAll('[type="checkbox"]').forEach(item => {
//     if(item.checked===true){
//       tech.push(item.value)
//     }
//   })
// });

function getData(event) {
    event.preventDefault();
    
    let title = document.getElementById('input-title').value;
    let description = document.getElementById('input-description').value;
    let image = document.getElementById('input-image').files;
    let start = document.getElementById('input-start').value;
    let end = document.getElementById('input-end').value;
    let nodejs = document.getElementById("node-js").checked == true ? `<img id="nodejs" src="./assets/images/icons/nodejs.png" style="width:5%; margin-right: 10px;">`: "";
    let nextjs = document.getElementById("next-js").checked == true ? `<img id="nextjs" src="./assets/images/icons/nextjs.png"style="width:5%;margin-right: 10px;">` : "";
    let reactjs = document.getElementById("react-js").checked == true ? `<img id="reactjs" src="./assets/images/icons/reactjs.png"style="width:5%;margin-right: 10px;">` : "";
    let typerscript = document.getElementById("typescript").checked == true ? `<img id="typescript" src="./assets/images/icons/typescript.png" style="width:5%;margin-right: 10px;>"` : "";
    
    image  = URL.createObjectURL(image[0]);
    let data = {
        title,
        description,
        start,
        end,
        image,
        nodejs,
        nextjs,
        reactjs,
        typerscript,
    }
    datas.push(data);
    showData();
  }
  const showData = () => {
    document.getElementById("contents").innerHTML = '';
    for(let i = 0; i < datas.length; i++) {
        document.getElementById("contents").innerHTML += `
        <div class="card-item">
            <div class="image">
              <img src="${datas[i].image}" alt="" />
              <h1>
                <a href="blog-detail.html" target="_blank"
                >${datas[i].title}</a>
              </h1>
              Durasi : ${days(datas[i].start,datas[i].end)} Hari
            </div>
            <div class="card-content">
              <p>
              ${descLength(datas[i].description,250)}
              </p>
              <div style="display:flex; flex-direction:row;">
              ${datas[i].nodejs} ${datas[i].nextjs} ${datas[i].reactjs} ${datas[i].typerscript}
              </div>
            </div>
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
          </div>`
    }
}
const descLength = (desc, num) => {
  if (desc.length > num) {
    return desc.slice(0, num) + '...'
  } else{
  return desc;
  }
}
function days(dateOne,dateTwo){

  const dateStart = new Date(dateOne);
  const dateEnd = new Date(dateTwo);
  const diffTime = Math.abs(dateEnd - dateStart);
  const diffDays = Math.ceil((diffTime +86400000)/ (1000 * 60 * 60 * 24));
  return diffDays;
}