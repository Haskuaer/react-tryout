## onClick error
❗ **PROBLEM**
- ❌ onClick gets setter instead of function 
```js 
onClick={setUsername()} 
``` 

💡 **SOLUTION**
- ✅ put setter in a function 
```js 
onClick={() => setUsername()} 
``` 

## props.children error
❗ **PROBLEM**
- ❌ parent injected <p> into another <p> in children  
```js 
<Son> <p>...</P> --> <p>{props.children}</p>
```

💡 **SOLUTION**
- ✅ wrap props.children in <div> 
```js
<div>{props.children}</div>
```

## constants export
❗**PROBLEM**
- ❌ couldn't export default two constants from the same file
```js
export default { BUTTONS, TYPES }
```

💡**SOLUTION**
- ✅ separete export
```js
export const TYPES = ...
export const BUTTONS = ...
```