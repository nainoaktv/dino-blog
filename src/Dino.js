import './Dino.css';

function Dino(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
              <div className="card-body">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxbaozaw4XJvI4UdQ4249m4bwxg6HK2qG619zOtVuABxQhgIE_uf5F-EURJDhRaFjH0c&usqp=CAU" alt="dino image" />
                  <h5 className="card-title">{props.dino.title}</h5>
                  <p className="card-text">{props.dino.body}</p>
                  <p>{props.dino.author}</p>
                  <p>{props.dino.comments[0]}</p>
              </div>
      </div>
  )
}

export default Dino;