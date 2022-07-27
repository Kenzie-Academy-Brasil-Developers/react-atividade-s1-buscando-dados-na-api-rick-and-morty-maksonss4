import { Container } from "./style";

function CharCard ({name, image, status, species}) {

    return(
        <Container status={status}>
            <h3>{name}</h3>
            <figure>
                <img src={image} alt={name} />
            </figure>
            <p>{species}</p>
        </Container>
    )
}

export default CharCard