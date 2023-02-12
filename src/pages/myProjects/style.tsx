import { styled } from "@/styles/stitches.config";

export const ProjetcsContainer = styled("ul",{
    margin: "auto",
    display: "flex",

    "@mobile": {
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
    
}) 

export const ProjectsCard = styled("li",{
    listStyle: "none",
    margin: "50px"
    
}) 