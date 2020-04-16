function validateForm(){
    var form_object = document.forms.tutform;
    var radios      = document.forms.tutform.elements.color;
    var email       = document.forms.tutform.elements.email.value;
  
    if(form_object.elements.firstname.value == "){
      alert('Вы должны ввести свое имя!');
      return false();
    } else if(form_object.elements.lastname.value == "){
      alert('Вы должны ввести свою фамилию!');
      return false();
    } else if(email.indexOf('@')<0){
        alert('В адресе e-mail должен быть символ @');
        return false();
      } else if(email.indexOf('@') != email.lastIndexOf('@')){
        alert('В адресе e-mail не может быть более одного символа @');
        return false();
      } else if(email.indexOf('.')<0){
        alert('В адресе e-mail должна быть как минимум одна точка');
        return false();
      } else if(email.lastIndexOf('.')<email.indexOf('@')){
        alert('В адресе e-mail должна быть как минимум одна точка после символа @');
        return false();
      }
    
      for(var i=0; i<radios.length; i++){
        if(radios[i].checked) return true();
      }
      alert('Необходимо выбрать цвет!');
    
      return false;
    }
      