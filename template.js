'use strict';
class ClassName extends HTMLElement{

    static get observedAttributes(){
        return ['attr']
    }

    static get ATTR(){return new Set(['true', 'false', ''])}

    get attr(){ return this.getAttribute("attr")}
    set attr(v){this.setAttribute("attr", v)}
  
     constructor(){
        super()

        //#region Root
         this.root = this.attachShadow({mode: 'open'})
        
        //#endregion

        //#region Fields         
                    
        //#endregion
        
        
    }

    connectedCallback(){
        // this.addEventListener()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name){
            case 'attr':{
                if(!ClassName.ATTR.has(newValue)) return console.error('Can be setted only value: ', ClassName.ATTR)

                if(newValue == "true" || newValue == ""){
                    //
                }
                else if(newValue == "false"){
                    //
                }

                break;
            }
        }
    }

    //#region Private
    
        addEventListener(){}

    //#endregion

    //#region Methods
    //#endregion
}

    
customElements.define('custom-element', ClassName)
