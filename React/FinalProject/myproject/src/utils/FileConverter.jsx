export default function FileConverter(e){
    const file = e.target.files[0];
    return new Promise((resolve, reject) => {
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
            resolve(reader.result);
        };
        reader.onerror=(err)=>{
            reject(err);
        }
    })
}