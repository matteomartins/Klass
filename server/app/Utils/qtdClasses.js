module.exports={
  QtdClasses: (qtd_in_subject, qtd_available_classes) => {
    let qtd_classes = 0;
    if(qtd_in_subject > qtd_available_classes){
      qtd_in_subject = qtd_available_classes;
    }

    if(qtd_in_subject > 3 && qtd_in_subject % 2 == 0){
      qtd_in_subject = 2;
    }
    else if(qtd_in_subject == 5 || qtd_in_subject == 7){
      qtd_in_subject = 3;
    }

    qtd_classes = qtd_in_subject;

    return qtd_classes;
  }
}
