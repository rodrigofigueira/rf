/*
@params currentSettings = {
    element: 'mySelect',
    data : [{id: 1, name: 'Sentinel'},{id: 2, name: 'Magneto'},{id: 3, name: 'Wolverine'}],
    value : 'id',
    text : 'name',
    emptyObject : {value: '', text: 'Selecione'},
    selectedValue : 2
};
*/
function fillSelect(settings){    

    let _element;

    if(typeof settings.element === 'string'){
        _element = document.querySelector(`#${settings.element}`);
    } 
    
    if(typeof settings.element === 'object' && settings.element.nodeName === 'SELECT'){
        _element = settings.element;
    }

    if(!_element) throw new Error('Element or string name is not valid');

    if(settings.emptyObject)
    _element.innerHTML = `<option value="${settings.emptyObject.value}">${settings.emptyObject.text}</option>`

    _element.innerHTML += settings.data.map(e => {
        return `<option  ${e[settings.value] == currentSettings.selectedValue ? 'selected' : ''}  
                value="${e[settings.value]}">${e[settings.text]}</option>`
    }).join(' ');

}

const xmen = [{id: 1, name: 'Sentinel'},{id: 2, name: 'Magneto'},{id: 3, name: 'Wolverine'}];

const currentSettings = {
    element: 'mySelect',
    data : xmen,
    value : 'id',
    text : 'name',
    emptyObject : {value: '', text: 'Selecione'},
    selectedValue : 2
};

fillSelect(currentSettings);