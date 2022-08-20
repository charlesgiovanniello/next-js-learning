import helpDetails from '../data/dataset'

const Help = () => {
    const faqItems = helpDetails.map((item,i) =>{
        return (<li key={i}>{item}</li>)
    })
    return ( 
        <div>
        <h1>Need help? See below for FAQ</h1>
        <ul>{faqItems}</ul>
        </div>
     );
}

export default Help;