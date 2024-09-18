export default function Navbar(props){
   return(
    <nav>
        <ul>
            <li>Homepage</li>
            <li>About</li>
            <li>{props.name}</li>
            
            

        </ul>
    </nav>
   )
}