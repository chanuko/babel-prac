
// import "regenerator-runtime/runtime";

export default function send(event: Event){
    let fd = new FormData();
    fd.append("name", "aaaa");

    fetch("https://localhost", {
        method: 'post',
        body: fd,
        keepalive: true
    })
        .then((res) => res)
        .then((res) => console.log(res))
        .catch((error)=> console.error(error))
        ;
}