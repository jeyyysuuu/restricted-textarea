const textArea = document.getElementById('text-input');
const charCount = document.getElementById('charCount');
const maxLength = parseInt(textArea.getAttribute('maxlength'), 10);

textArea.addEventListener('input',() => {

    const currentLength = textArea.value.length;

    charCount.textContent = currentLength;

    if (currentLength >= maxLength){
        textArea.classList.add('limitreach');
    } else{
        textArea.classList.remove('limitreach');
    }
})