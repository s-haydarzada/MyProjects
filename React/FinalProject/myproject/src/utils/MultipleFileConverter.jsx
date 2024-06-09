export default function MultipleFileConverter(e){
    const files = e.target.files;
    console.log(files)
    const filePromises = [];

    for (let i = 0; i<files.length;i++){
    const file = files[i];
    const promise= new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload=()=>{
        resolve(reader.result)
    }
    reader.onerror=(err)=>{
        reject(err)
    }

    reader.readAsDataURL(file)
})
    filePromises.push(promise)
    }

    return Promise.all(filePromises)
}