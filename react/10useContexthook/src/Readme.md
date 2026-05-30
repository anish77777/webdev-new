here file hierarchy is 
App.jsx
   Navbar.jsx
       Button.jsx
         Component1.jsx

         if there is some data or state in App.jsx that we want to share with Component1.jsx
         then we need to pass it through Navbar.jsx and Button.jsx
         which is called prop drilling 

         <!-- props drilling-->

         in app.jsx
         const [name, setName] = useState("Ashek")
         this name is in app.jsx 
         now we want to use this name in Component1.jsx 
         so we need to pass it through Navbar.jsx and Button.jsx

         in navbar.jsx
         function Navbar({name}) {
             return (
                 <div>
                     <div>Navbar {name}</div>
                     <Button name={name} />
                 </div>
             )
         }
         in button.jsx
         function Button({name}) {
             return (
                 <div>
                     <Component1 name={name} />
                 </div>
             )
         }
         in component1.jsx
         function Component1({name}) {
             return (
                 <div>
                     <div>Component1 {name}</div>
                 </div>
             )
         }
         


<!-- use  -->
 