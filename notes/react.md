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

## Render

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

## Component

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

## Props

For passing data to components

ℹ️ **INFO**

- you can put as many props as you want
- can be **any value**
- you can name props as you want
- use **destructing**

❗ **IMPORTANT**

- component recives the argument as a **object**
- variables, objects & arrays has to be sent as expression **{ }**
- props are **read only**

🪲 **COMMON ERROR**

- to pass props from A to C, you have to pass to B aswell **(props drilling)**
- if you want to pass props deeper use **hook** instead 

🛠️ **EXAMPLE**

```js
function Component(props) {

    const {data} = props;

    return (
        <p>That's from props: {data}</p>
    )
}

...

<Component data="Hi I'm props value 😊" />
```

## Attributes

Changed so they could work in React

ℹ️ **INFO**

- some HTML attributes names are reserved in js
- most common uses: **className, onClick, onSubmit**

❗ **IMOPORTANT**

- class becomes **className** *(class = js object)*
- we use **camelCase** instead of **"-"**
- we use **camelCase** for **events**

🛠️ **EXAMPLE**

```js
<button onClick={() => setUsername("Daniel... Sorry")}>I'm Daniel</button>
```

## Conditionals

You can conditionally render components

ℹ️ **INFO**

- you can use **tenary, logical** or **if statements**

❗ **IMPORTANT**

- ifs outside return
- tenary **(x ? a : b)** and logical **&&** wherever

🛠️ **EXAMPLE**

**IF**
```js
function Component(props) {

    const {data} = props;

    if(data) return ( <p>That's from props: {data}</p> )
    else return ( <p>No props 🥺</p>)
}
```

**Tenary**
```js
function App() {

  const [username, setUsername] = useState("Adam")

  return (
    <div>
      <h3>Greetings</h3>
      <p> Hello, {username} </p>
      <button onClick={() => username === "Daniel" ? setUsername("Adam") : setUsername("Daniel")}>That's not me</button>
    </div>
  )
}
```

**Logical**
```js
function App() {

  const [username, setUsername] = useState("Adam")

  return (
    <div>
      <h3>Greetings</h3>
      <p> Hello, {username} </p>
      <button onClick={() => username === "Daniel" ? setUsername("Adam") : setUsername("Daniel")}>That's not me</button>
      {username === "Adam" && <p>I know you're Adam!</p>}
    </div>
  )
}
```

## Props Children

You can sent elements to children component

ℹ️ **INFO**

- you can specify where element should be displayed

🛠️ **EXAMPLE**

```js
function Son(props) {

    return (
        <div>
            <h4>Hi I'm son</h4>
            <div>{props.children}</div>
        </div>
    )
}

function Daughter(props) {

    return (
        <div>
            <h4>Hi I'm daughter</h4>
            <div>{props.children}</div>
        </div>
    )
}

function App() {

  return (
    <div>
      <h3>Props Children</h3>
      <Son>
        <p>You're son of a App</p>
      </Son>
      <Daughter>
        <p>You're daughter of a App</p>
      </Daughter>
    </div>
  )
}
```

# 🪝 HOOKS

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