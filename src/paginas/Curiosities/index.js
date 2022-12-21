import './Curiosities.css'

export default function Curiosities() {
    return (
        <section className='curiosities'>
            <h1 className='title-principal'>Curiosities about the series</h1>
            <section className='section-curiosities'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NakTu_VZxJ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>Wednesday's famous dance</p>
            </section>
            <section className='section-curiosities'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Jq_etwhv6vw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>Original Wednesday Addams dance</p>
            </section>
        </section>
    )
}