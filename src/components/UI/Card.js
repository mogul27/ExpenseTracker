// Typical name for container style thing
import './Card.css'

// This is a custom reusable wrapper component
function Card(props) {
    const classes = 'card ' + props.className
    // children is a reserved prop name where the prop is always = the content
    // between the opening and closing tag of custom component
    // This parses the classname onto the string for creating format style
    return <div className={classes}>{props.children}</div>
}

// This card will be a shell that replaces div to give a 
// pre-define style
export default Card;