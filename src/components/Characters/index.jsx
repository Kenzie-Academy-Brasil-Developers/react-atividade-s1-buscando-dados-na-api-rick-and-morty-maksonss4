import CharCard from "../CharCard"
import { Container } from "./style"

function Characters ({characterList}) {

    return(
        <Container>
            {
                characterList.map(charact => {
                    return <CharCard key={charact.id} species={charact.species} name={charact.name} image={charact.image} status={charact.status}></CharCard>
                })
            }
        </Container>
    )
    
}

export default Characters