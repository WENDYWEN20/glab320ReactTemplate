export default function Footer(props){
    return(
     <nav>
         <ul>
             <li>{props.contact}</li>
             <li>{props.address}</li>
             <li>{props.message}</li>
             
             
 
         </ul>
     </nav>
    )
 }