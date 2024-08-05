
function Person(props) {
    const { id, firstName, lastName, email, img } = props;
    return (
        <div className="card">
            <img src={img} alt="img" />
            <h1>{firstName}  {lastName}</h1>
            <h3>{email}</h3>
            <p>{id}</p>
        </div>
    )
}

export default Person;