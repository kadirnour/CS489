Blog Post
Difference between Class-based and Hooks-based implementation in React


    React launched in 2013 and has since been a very popular tool for building applications. As we are all familiar with, this library exclusively used something called class-based components. However, in 2018 a new approach was introduced to React which lets one do everything they could before but without the need for a class. This is done with something called Hooks, which build on and solve many of the problems with a traditional class-based implementation in React. Today, hooks have become extremely popular with developers as they provide a more flexible and readable approach to building an application.

	First, since we know how to use classes in React, I think it’s important to mention that refactoring a class to use hooks is straight forward and should never break the code. Furthermore, hooks and classes can be used together with no problem. In a class-based implementation, the code can be excessively long/confusing/unrelated leading to “an unmanageable mess of stateful logic and side effects”1. With the introduction of hooks, this code can be broken apart into many functions, resulting in a much more readable and reusable code base. Due to this, bugs are much easier to find, and the functions allow us to test the code more efficiently. 

	This leads me to the main difference between the two implementations, which is how they interact with the state. As we know, class-based components set their state using ‘setState()’. With the use of hooks, which are just functions, we can hook onto the React state and lifecycle features from these components2. To keep track of values, we take advantage of something called ‘useState()’. For example, in the function we can define a variable such as…
 
        const [numberOfPets, setNumberOfPets] = useState(0)

    As we can see, the useState gives us an array, where the first value is the actual value of our variable (‘numberOfPets’), and the second is used to set this value (‘setNumberOfPets’). When updating the state, hooks don’t merge it like classes do, but rather replace it2. It’s important to note that we can use the state of just about any value/type/model. 

	React components have methods which are called at different points in a component’s life. The render() method is the most popular life cycle method (which is required in classes) but there are also methods for when a component updates or dies. The list goes on and on: ‘componentDidMount()’, ‘componentDidUpdate()’, ‘componentWillUnmount()’, and many more. I’m sure you’re familiar with at least 3 these lifecycle methods, which are also known as ‘side effects’. With a hook-based implementation, we can think of the ‘useEffect’ hook as all three of these lifecycle methods combined3. After every render of our component, the useEffect hook will call the function inside of it. This can be very helpful and greatly decreases the amount of code needed when comparing it to a class-based approach. 

	Overall, hooks can be used to do anything a class does but more. That’s not to say class-based components are completely obsolete, but in general the use of functions seems like the better approach. The flexibility, usability, and readability provided by hooks is the cause of this, and I’m interested in seeing how React progresses in the near future. 


References
(1)	https://reactjs.org/docs/hooks-intro.html
(2)	https://betterprogramming.pub/react-hooks-vs-classes-add2676a32f2
(3)	https://reactjs.org/docs/hooks-effect.html

Introducing hooks. React. (n.d.). Retrieved December 8, 2021, from https://reactjs.org/docs/hooks-intro.html. 
L, R. (2020, January 23). React hooks versus classes. Medium. Retrieved December 8, 2021, from https://betterprogramming.pub/react-hooks-vs-classes-add2676a32f2. 
Using the effect hook. React. (n.d.). Retrieved December 8, 2021, from https://reactjs.org/docs/hooks-effect.html. 

