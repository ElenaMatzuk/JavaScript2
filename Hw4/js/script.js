class  ReplaceText {
    constructor(container = '.text') {
        this.container = container;
        this.getText();  
    }
    
    getText(){
        const data = document.querySelector(this.container);
        let regExp = /'/g;     
        let result = data.innerHTML.replace((regExp),'"');   

        regExp = /\b"\b/g;
        result = result.replace((regExp),'\'');       
        data.innerHTML = result;   
    }
}

const replaceText = new ReplaceText();