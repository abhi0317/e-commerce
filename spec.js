function validate1(){
    name1=document.f1.fn1.value
    name2=document.f1.mn1.value
    name3=document.f1.ln1.value
    address1=document.f1.address.value
    email1=document.f1.email.value
    ph1=document.f1.ph.value
    ph3=document.f1.ph2.value
    pho1=document.f1.pho.value
    pho3=document.f1.pho2.value
    phon1=document.f1.phon.value
    fax1=document.f1.fax.value
    if(name1==""){
      alert("plese enter your first name")
      return false
    }
    else{
        patt=/^[A-z\s\.]+$/
        result=patt.test(name1)
        if(result==false){
            alert("Only allow charectors,dot & space")
            return false
        }   
    }
    if(name2==""){
      alert("plese enter your second name")
      return false
    }
    else{
        patt=/^[A-z\s\.]+$/
        result=patt.test(name2)
        if(result==false){
            alert("Only allow charectors,dot & space")
            return false
        }   
    }
    if(name3==""){
      alert("plese enter your last name")
      return false
    }
    else{
      patt=/^[A-z\s\.]+$/
      result=patt.test(name3)
      if(result==false){
          alert("Only allow charectors,dot & space")
          return false
      }   
  }
  if(address1==""){
    alert("plese enter your address")
    return false
  }
  else{
    patt=/^[A-z\.\s0-9]+$/
    result=patt.test(address1)
    if(result==false){
      alert("Only allow charectors,dot & space")
      return false
    }
  }
  if(email1==""){
    alert("plese enter your email")
    return false
  }
  else{
    patt=/^[A-z0-9\@\.]+$/
    result=patt.test(email1)
    if(result==false){
      alert("Only allow charectors,dot & space")
      return false
    }
  }
  if(ph1==""){
    alert("plese enter your phone number")
    return false
  }
  else{
    patt=/^[0-9]+$/
    result=patt.test(ph1)
    if(result==false){
      alert("only allow numbers")
      return false
    }
  }
  if(ph3==""){
    alert("plese enter your phone number")
    return false
  }
  else{
    patt=/^+[0-9]$/
    result=patt.test(ph3)
    if(result==false){
      alert("only allow numbers")
      return false
    }
  }
  if(pho1==""){
    alert("plese enter your phone number")
    return false
  }
  else{
    patt=/^[0-9]+$/
    result=patt.test(pho1)
    if(result==false){
      alert("only allow numbers")
      return false
    }
  }
  if(pho3==""){
    alert("plese enter your phone number")
    return false
  }
  else{
    patt=/^[0-9]+$/
    result=patt.test(pho3)
    if(result==false){
      alert("only allow numbers")
      return false
    }
  }
  if(phon1==""){
    alert("plese enter your phone number")
    return false
  }
  else{
    patt=/^[0-9]+$/
    result=patt.test(phon1)
    if(result==false){
      alert("only allow numbers")
      return false
    }
  }
  if(fax1==""){
    alert("plese enter your fax number")
    return false
  }
  else{
    patt=/^[0-9]+$/
    result=patt.test(fax1)
    if(result==false){
      alert("only alllow numbers")
      return false
    }
  }

  }