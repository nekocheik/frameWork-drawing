

class drawing {


  constructor(){
     this.elementOfDom = document.querySelectorAll('div');
    this.refrecheDom();
    setTimeout(()=>{
      this.linsentClick();
    }, 1000)
  };

  refrecheDom(){
    setInterval( ()=>{

      let eventOfDom = [
        
      ] 
      window.addEventListener('')



  //     this.elementOfDom =  document.querySelectorAll('div');
  //     this.elementOfDom.forEach( e => {
  //       console.log(e)
  //     });
  //   } , 800)  
  // }

  linsentClick(){
    // console.log(this.elementOfDom[0] )
    for (let i = 0; i < this.elementOfDom.length ; i++) {
      const e = this.elementOfDom[i]
    }
  }

 }


 const draw = new drawing();