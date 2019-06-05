

class drawing {


  constructor(){
     this.elementOfDom = document.querySelectorAll('div');
    // this.refrecheDom();
    setTimeout(()=>{
      this.linsentClick();
    }, 1000)
  };

  refrecheDom(){
    setInterval( ()=>{
      this.elementOfDom =  document.querySelectorAll('body');
    } , 800)
  }

  linsentClick(){
    console.log(this.elementOfDom[0] )
    for (let i = 0; i < this.elementOfDom.length ; i++) {
      const e = this.elementOfDom[i];
      console.log(e)
    }
  }

 }


 const draw = new drawing();