var ModalOpen = document.querySelector(".btn-modal");
var ModalClose = document.querySelector(".modal__close-btn");
var Modal = document.querySelector(".modal__wrap");

if(ModalOpen){
    ModalOpen.addEventListener("click", function(){
        Modal.classList.add("modal-wrap--active");
    });
}

if(ModalClose){
    ModalClose.addEventListener("click", function(){
        Modal.classList.remove("modal-wrap--active");
    });
}

$(document).ready(function(){
    
    $('.modal__form').submit(function () {
      var form = $(this);
      var field = [];
      form.find('input[data-validate]').each(function () {
        field.push('input[data-validate]');
        var value = $(this).val(),
            line = $(this).closest('.input__col');
        for(var i=0;i<field.length;i++) {
          if( !value ) {
            line.addClass('input__col-active');
            setTimeout(function() {
              line.removeClass('input__col-active')
            }.bind(this),100000);
            event.preventDefault();
          }
        }
      });
    });
  });