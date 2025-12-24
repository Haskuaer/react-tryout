#  🍵 JSX

## Start

React needs Node to work

ℹ️ **INFO**

- needs building tool { **vite** , next.js, redix}

❗ **IMPORTANT**

- you have to do **npm install** when you switch devices

🛠️ **EXAMPLE**

`npm create vite@latest`
`npm install`

## render

React has main html file named **index.html**
It has **root div** which will be injected with components
To do so React use **createRender** method in **main.jsx**

ℹ️ **INFO**

- the id does not have to be **root**
- the element doesn not have to be **div**

🛠️ **EXAMPLE**

**index.html**
```html
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
</body>
```

**main.jsx**

```js
createRoot(document.getElementById('root')).render( *COMPONENT* )
```

## component

Reusable element

ℹ️ **INFO**

- used instead of **JS createElement**
- use expresions **{ }**

**❗IMPORTANT**

- always returns **single** element {use fragments **<> </>** to wrap elements}
- all **data** and **methods** before return
- **NO** ifs and loops in expressions

🛠️ **EXAMPLE**

```js
function Component(){

    const numberOne = 3;
    const numberTwo = 5;

    return (
        <p>{numberOne + numberTwo}</p>
    )
}
```

## useState

For holding state

ℹ️ **INFO**

- most commonly used
- accepts all type of data

❗ **IMPORTANT**

- change of state cause **re-render**
- change value by **setter**

🪲 **COMMON ERROR**

- changing state can lead to infinite re-render loop

🛠️ **EXAMPLE**

```js
const [date, setDate] = useState(0);

...

<button onClick={() => setDate(1)}></button>
```