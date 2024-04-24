import Biology from "../Biology/Biology";
import Training from "../Training/Training";

const About = ({ pokemon, about }) => {
    return (
        <section className={`${about ? "aboutSection active" : "aboutSection"}`}>
            <Biology pokemon={pokemon} />
            <Training pokemon={pokemon} />

        </section>
    );
}
export default About;