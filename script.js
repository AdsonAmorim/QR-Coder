let qr
(function(){
    qr = new QRious({
        element:document.querySelector('#qrCode'),
        size:300,
        value:""
    })
})();

const qrButton = document.querySelector('.qrButton')

qrButton.addEventListener('click',()=>{
    const qrText = document.querySelector("#qr").value
    qr.set({
        value:qrText
    })

    if(qrText){
        const qrSucess = document.querySelector('#qrSucess')
        qrSucess.innerHTML = 'Código gerado com sucesso'
        
        const ocultName = setTimeout(()=>{
            qrSucess.innerHTML=""
        },2000) 
    }
})
