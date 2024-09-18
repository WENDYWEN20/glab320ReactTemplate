
export default function Content(props){
    return(
        <div>
     <p style={{color:props.color}}> Content</p>
     <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quam commodi ipsam necessitatibus blanditiis quo quos neque nam? Nostrum aliquid rerum culpa quam neque cupiditate facilis velit aliquam corporis mollitia.</article>
    <img src={props.image} alt="" />
     </div>     
 
       )
 }