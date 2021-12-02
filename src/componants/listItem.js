function Listitem(props)
{
    function test()
    {
        console.log(props.name.name);
    }
    return(
        <div>{props.name.name}
        <button onClick={test}>Click me</button>
        
        </div>
    )
}
export default Listitem;