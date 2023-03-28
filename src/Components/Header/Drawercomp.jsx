import React,{useState} from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';



const Drawercomp = () => {

    const [openDrawer, setopenDrawer] = useState(false);

    const PAGES=["Lifestyle","Design","Studio","Testimonial","Shop","About Abode",<SearchIcon sx={{fontSize:20}}/>];
    
  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={()=>setopenDrawer(false)} PaperProps={{
            sx: { width: "60%" },
          }}>
        <List>
         { PAGES.map((page,index)=> (
            <ListItemButton key={index} >
                <ListItemIcon>
                    <ListItemText primaryTypographyProps={{fontSize: '16px'}}  >
                    {page}
         
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
         ))}
        </List>
       </Drawer>

        <IconButton sx={{color:"grey",marginLeft:"auto"}} onClick={()=>setopenDrawer(!openDrawer)}>
       <MenuIcon sx={{fontSize:30}}/>
        </IconButton>
    </React.Fragment>
  )
}

export default Drawercomp