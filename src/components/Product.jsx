import { Box, makeStyles, Typography } from "@material-ui/core";
import page1 from '../Assets/Images/page1.png';
import page2 from '../Assets/Images/page2.jpg';

const useStyle = makeStyles({
    image:{
        width:'50%',
        height:'50%'

    },
    component:{
        margin:50 
    }

})

const Product = () => {
    const classes = useStyle();
    return (
        <Box classes={classes.component}>
            <Typography variant="h6" style={{marginBottom:50}}>Product</Typography>
           <Box style={{display:'flex'}}>
               <img className={classes.image} src={page1}/>
               <img className={classes.image} src={page2}/>
           
           </Box>
        </Box>

    )
}

export default Product;