import { Box, Button, Typography } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";





const ListCard = ({ data }) => {
    const [hideButton, setHideButton] = useState(true)
    const [displayStyle, setDisplayStyle] = useState('none');
    function handleMounseEnter(e, data) {
        setHideButton(false)
    }

    function handleMouseLeave(e, data) {
        setHideButton(true)

    }
    return (
        <div
            onMouseEnter={e => {
                setDisplayStyle('block');
            }}
            onMouseLeave={e => {
                setDisplayStyle('none')
            }}
        >
            <Box
                data-id={data?.id}
                align="center"
                sx={{
                    width: "288px",
                    height: "238px",
                    backgroundColor: "white",
                    display: 'flex',
                    alignItms: "center",
                    // justifyContent: "center",
                    gap: 2,
                    flexDirection: "column",
                    borderRadius: "20px",
                    mt: 5,
                }
                }
            >

                <Box
                    data-id={data?.id}
                    sx={{
                        width: "268px",
                        minHeight: "135px",
                        backgroundColor: "#F1F1F1",
                        borderRadius: "20px",
                        mx: "auto",
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        mt: 1
                    }}
                >
                    <Box data-id={data?.id} sx={{
                        mt: -7,
                        width: "140px"
                    }}>
                        <img data-id={data?.id} width={"100%"} src={data.sprites?.other.dream_world.front_default} />
                    </Box>
                </Box>
                <Typography pt={2} fontWeight={600}>{data.name}</Typography>
                {<Box sx={{ p: 2, display: displayStyle }}>
                    <Button variant="contained" sx={{ borderRadius: "14px", width: "100%", padding: 1.2 }} endIcon={<VisibilityIcon />}>View Pokemon</Button>
                </Box>}
            </Box >
        </div>
    )
}

export default ListCard