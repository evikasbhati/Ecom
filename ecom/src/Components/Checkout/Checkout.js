import styledComponents from "styled-components";

const Box=styledComponents.div`
width:200px;
height:200px;
background:Black;
`;

const Checkout=()=>{
    return(
        <div>
            <Box/>
        </div>
    )
}
export default Checkout