const resetBtn = document.querySelector('.reset');
resetBtn.onclick = resetFactory;
function resetFactory() {
  customerName.value = '';
  customerEmail.value = '';
  customerMessage.value = '';
}