# /!\ WIP /!\

## UseSelector - Pseudo code

### 1er approche

```js
function useSelector(cbSelection){
    const state = storeFromProvider.getState(); // il recupere le store donnée au Provider (qui englobe notre application)

    const [oldStateSlice, setOldStateSlice] = useState(null);

    const stateSlice = cbSelection(state);

    // il fait une comparaison simple avec l'ancienne valeur
    if(oldStateSlice !== stateSlice){
        // si c'est différent il re-render
        render(); // pseudo code, pour declencher le render de l'application
    }

    return stateSlice;
}
```

### 2eme approche

```js
function useSelector(cbSelection){
    const [oldStateSlice, setOldStateSlice] = useState(null);

    storeFromProvider.subscribe(() => {
        const state = storeFromProvider.getState(); // il recupere le store donnée au Provider (qui englobe notre application)

        const stateSlice = cbSelection(state);

        // il fait une comparaison simple avec l'ancienne valeur
        if(oldStateSlice !== stateSlice){
            // si c'est différent il met à jour l'ancienne valeur avec la nouvelle valeur
            //  du coup, faire un setState, déclenche un re-render
            setOldStateSlice(stateSlice);
        }
    });

    return oldStateSlice;
}
```


### 2eme approche bis + fonction de comparaison
```js
function useSelector(cbSelection, compareFunction = undefined){
    const [oldStateSlice, setOldStateSlice] = useState(null);

    storeFromProvider.subscribe(() => {
        const state = storeFromProvider.getState(); // il recupere le store donnée au Provider (qui englobe notre application)

        const stateSlice = cbSelection(state);

        let doReRender = false;
        if(typeof compareFunction === "function"){
            doReRender = compareFunction(oldStateSlice, stateSlice);
        }else{
            doReRender = oldStateSlice !== stateSlice
        }

        // il fait une comparaison simple avec l'ancienne valeur
        if(){
            // si c'est différent il met à jour l'ancienne valeur avec la nouvelle valeur
            //  du coup, faire un setState, déclenche un re-render
            setOldStateSlice(stateSlice);
        }
    });

    return oldStateSlice;
}
```
