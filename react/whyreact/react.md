without react
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="counter">0</div>
    <button id="increment">Increment</button>
    <button id="decrement">Decrement</button>
    <script>
        let counter = 0;
        const counterElement = document.getElementById("counter");
        const incrementButton = document.getElementById("increment");
        const decrementButton = document.getElementById("decrement");
        incrementButton.addEventListener("click", () => {
            counter++;
            counterElement.textContent = counter;
        });
        decrementButton.addEventListener("click", () => {
            counter--;
            counterElement.textContent = counter;
        });
    </script>
</body>
</html>

<!-- with react -->
You dont have to write in html 
you have to write in jsx 

<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<div id="root"></div>

<script type="text/babel">
  function Counter() {
    const [count, setCount] = React.useState(0);

    return (
      <div>
        <div id="counter">{count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Counter />);
</script>