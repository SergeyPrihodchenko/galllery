export function validate(e) {
    if (e.target.tagName == 'BUTTON') {
        const collection = document.getElementsByClassName('form-control');
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].value === '') {
                collection[i].classList.add('form-validate');
                e.preventDefault();
            }
        }
    }
}

export function checkFile(e) {
    let arrName = e.target.files[0].name.split('.');
    const arrFile = ['jpg','png','bmp','psd'];
    let check = false;
    e.target.classList.add('form-validate')
    arrFile.forEach(el => {
       if(RegExp(el).test(arrName[arrName.length-1])) {
            if(e.target.classList.contains('form-validate')) {
                e.target.classList.remove('form-validate')
                check = true
            }
       }
    })
    return check
}