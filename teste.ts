const getStaticProps = async () => {
    const res = await fetch('https://eco-api.vercel.app')
    const rep = await res.json()
    console.log(rep)
}
