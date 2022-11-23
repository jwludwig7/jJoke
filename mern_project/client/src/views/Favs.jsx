import { Link } from "react-router-dom"

export const Favs = (props) => {
    return (
        <div className="background">
            <div className="d-flex justify-content-between bg-light">
                <Link to={'/jokes/filter'}><button className="btn btn-primary">Filter</button></Link>
                <h1>jJoke</h1>
                <Link to={'/jokes'}><button className="btn btn-primary">Home</button></Link>
            </div>

            <h3 className="p-2 m-3">Jordan's Favorited Jokes</h3>

            <div className="p-4 m-3 bg-light border border-1 rounded">
                <p>display of of all favorited jokes and have the ability to take them out </p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vel. Dolorum ad aspernatur odit eligendi cupiditate laboriosam placeat, voluptas culpa quam modi magnam necessitatibus animi quidem error omnis non? Atque?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae aperiam saepe quam porro doloremque adipisci fugit fugiat blanditiis dignissimos ullam, praesentium est voluptatum, animi quas expedita impedit? Unde, quod est.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate explicabo placeat fugiat error iure cum necessitatibus, cumque quia laborum atque, consequuntur sit distinctio dignissimos reprehenderit corrupti reiciendis quos qui facilis.</p>
            </div>

        </div>
    )
}