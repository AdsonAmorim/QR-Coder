let qr
(function(){
    qr = new QRious({
        element:document.querySelector('#qrCode'),
        size:300,
        value:"",
        mime:"image/png"
    })
})();

//real time
const qrInput = document.querySelector('#qr')

qrInput.oninput = QrRealTime

function QrRealTime(e){
    qr.set({
        value:e.target.value
    })
}