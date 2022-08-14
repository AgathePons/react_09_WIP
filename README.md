# /!\ WIP /!\

## Redux controlled component

It is not because we use Redux that we have to stock absolutely all data in the store. We can choose (wisely) regarding if the data is **local** or **global**.

![data_global_local](readme_img/schemaDataGlobalLocal.jpg)

Here, I chose to use the vanilla React `useState` and `useEffect` becase the data is local so it do not have to be in the Redux store.
But regarding the project's governance, it is absolutely possible to handle it with Redux and stock it in the store.

The advantage is that if we have some big form with sub-components, using the Redux store and the global state for controlled components like inputs and so on allow us to access data from anywhere without bothering to transport the data where they have to be used.

**BUT** it is more complexe, and less fast to load, and the more the app grows up, the more the app will be slow down.

An other way to handle some forms could be **React context**, so note for later : take a look at the [React context doc](https://fr.reactjs.org/docs/context.html).

![react_context](readme_img/schemaControlledContext.png)

## UseSelector - Comparison function

```js
function useSelector(cbSelection, compareFunction = undefined){
    const [oldStateSlice, setOldStateSlice] = useState(null);

    storeFromProvider.subscribe(() => {
        const state = storeFromProvider.getState(); // get the store given to the Provider

        const stateSlice = cbSelection(state);

        let doReRender = false;
        if(typeof compareFunction === "function"){
            doReRender = compareFunction(oldStateSlice, stateSlice);
        }else{
            doReRender = oldStateSlice !== stateSlice
        }

        // simple comparison between the new value and the old value
        if(){
            // if it is different, update the old value with the new one
            //  so, doing a setState, trigger a re-render
            setOldStateSlice(stateSlice);
        }
    });

    return oldStateSlice;
}
```

## Redux combineReducers()

We can split our reducer into multiple reducers using `combineReducers()`.

In the store file, we can do:

```js
const rootReducer = combineReducers({
  chat: chatReducer,
  settings: settingsReducer,
});
```

We can combine and chain to combine reducers in other reducers

```js
const rootReducer = combineReducers({
  chat: chatReducer,
  settings: settingsReducer,
  others: combineReducers({
     firstOther: firstOtherReducer,
     secondOther: secondOtherReducer,
  }),
});
```

Then, we give the `rootReducer to the store`:

```js
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
```

## Selectors files

To simplify the way we get the data from the store, we can use selectors.  
Because it becomes to be tricky with multiple stores and reducers (especially if we decide to change the store/reducers architecture), we can use a folder `selectors` with a selectors file for each reducer.  
In the selectors file, we juste export one function by element that takes the global state in argument, and return the specific element of the state we want.

So we can have:

```js
// file elementSelectors.js
export const selectElementOne = (state) => state.elements.thingOne;
export const selectElementTwo = (state) => state.elements.thingTwo;
// file pieceSelectors.js
export const selectPieceOne = (state) => state.pieces.thingOne;
export const selectPieceTwo = (state) => state.pieces.thingTwo;
// file partSelectors.js
export const selectpartOne = (state) => state.parts.thingOne;
export const selectpartTwo = (state) => state.parts.thingTwo;
```

And where we need some data:

```js
// import
import { selectElementOne, selectElementTwo } from '../selectors/elementSelectors';
import { selectPieceOne } from '../selectors/pieceSelectors';
import { selectpartTwo } from '../selectors/partSelectors';

// get the data
const elementOne = useSelector(selectElementOne);
const elementTwo = useSelector(selectElementTwo);
const pieceOne = useSelector(selectPieceOne);
const partTwo = useSelector(selectpartTwo);
```
